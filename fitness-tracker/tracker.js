// -------------------------------------------------------------------
// RUBRIC: Objects and/or Arrays
// -------------------------------------------------------------------
let loggedSets = [];
let currentReps = 0;
let setNumber = 1;

// -------------------------------------------------------------------
// RUBRIC: DOM Interaction (Select an element)
// -------------------------------------------------------------------
const repDisplay = document.getElementById("rep-counter");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnSave = document.getElementById("btn-save");
const btnFilter = document.getElementById("btn-filter");
const btnShowAll = document.getElementById("btn-show-all");
const logOutput = document.getElementById("log-output");

// -------------------------------------------------------------------
// RUBRIC: DOM Interaction (Listen for and react to events)
// RUBRIC: Conditional Branching (if/else statements)
// -------------------------------------------------------------------

// Function 1: Add Reps
btnPlus.addEventListener("click", function() {
  currentReps = currentReps + 1;
  repDisplay.innerText = currentReps; // DOM Interaction (Modify element)
});

// Function 2: Subtract Reps
btnMinus.addEventListener("click", function() {
  currentReps = currentReps - 1;

  // Conditional Branching
  if (currentReps < 0) {
    currentReps = 0;
  }
  repDisplay.innerText = currentReps;
});

// Function 3: Save the Set
btnSave.addEventListener("click", function() {
  // Conditional Branching
  if (currentReps === 0) {
    alert("You must do at least 1 rep!");
  } else {
    // Create an Object and push to Array
    let newSet = {
      setID: setNumber,
      repsDone: currentReps
    };
    loggedSets.push(newSet);

    // Reset the tracker
    setNumber = setNumber + 1;
    currentReps = 0;
    repDisplay.innerText = currentReps;

    drawLog(loggedSets);
  }
});

// -------------------------------------------------------------------
// RUBRIC: Special Array Method (Using forEach and filter)
// RUBRIC: Functions (Included 2 or more functions)
// -------------------------------------------------------------------

// Function 4: Draw the Log using forEach
function drawLog(arrayToDraw) {
  logOutput.innerHTML = ""; // Clear current log

  if (arrayToDraw.length === 0) {
    logOutput.innerHTML = "<p>No sets found.</p>";
  } else {
    // SPECIAL ARRAY METHOD: forEach
    arrayToDraw.forEach(function(item) {
      let pTag = document.createElement("p");
      pTag.innerText = "Set " + item.setID + ": " + item.repsDone + " reps";
      pTag.style.borderBottom = "1px solid #ccc";
      pTag.style.padding = "5px 0";
      logOutput.appendChild(pTag); // DOM Interaction (Modify)
    });
  }
}

// Function 5: Filter button using filter()
btnFilter.addEventListener("click", function() {
  // SPECIAL ARRAY METHOD: filter
  let heavySets = loggedSets.filter(function(item) {
    return item.repsDone >= 10;
  });
  drawLog(heavySets);
});

// Function 6: Show all button
btnShowAll.addEventListener("click", function() {
  drawLog(loggedSets);
});
