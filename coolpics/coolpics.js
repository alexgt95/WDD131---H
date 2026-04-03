// Selectors
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const gallery = document.querySelector(".gallery");

// 1. Menu Functionality
function toggleMenu() {
  navLinks.classList.toggle("hide");
}

// 2. Window Resize Handling
function handleResize() {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove("hide");
  } else {
    navLinks.classList.add("hide");
  }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

// 3. Viewer Template Function (Required by Rubric)
function viewerTemplate(imagePath, altText) {
  return `
    <dialog class="viewer">
      <button class="close-viewer">X</button>
      <img src="${imagePath}" alt="${altText}">
    </dialog>
  `;
}

// 4. Event Handling (Gallery Click)
function openModal(e) {
  // Only trigger if an image was clicked
  if (e.target.tagName !== "IMG") return;

  const clickedImage = e.target;
  const src = clickedImage.getAttribute("src");
  const alt = clickedImage.getAttribute("alt");
  
  // Construct the full image path (swapping -sm for -full)
  const fullSrc = src.replace("-sm", "-full");

  // Insert the template into the top of the body
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSrc, alt));

  // Select the newly created modal elements
  const modal = document.querySelector(".viewer");
  const closeButton = document.querySelector(".close-viewer");

  // Close button functionality
  closeButton.addEventListener("click", () => {
    modal.close();
    modal.remove(); // Remove from DOM after closing
  });

  // Close modal if clicking outside the image (on the backdrop)
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
      modal.remove();
    }
  });

  modal.showModal();
}

gallery.addEventListener("click", openModal);