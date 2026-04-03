const character = {
  image: "snortleblat.webp",
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
 
  attacked() {
    if (this.health <= 0) {
      alert(`${this.name} is already dead!`);
      return;
    }
 
    this.health -= 20;
 
    if (this.health <= 0) {
      this.health = 0;
      updateDisplay();
      alert(`${this.name} died!`);
    } else {
      updateDisplay();
    }
  },
 
  levelUp() {
    this.level += 1;
    updateDisplay();
  }
};
 
function updateDisplay() {
  document.getElementById("char-name").textContent = character.name;
  
  document.getElementById("char-class").textContent = character.class;
  document.getElementById("char-level").textContent = character.level;
  document.getElementById("char-health").textContent = character.health;
  document.getElementById("char-image").src = character.image;
}
 
// Initialize the card on page load
updateDisplay();
 