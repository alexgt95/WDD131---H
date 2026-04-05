// -----------------------------------------
// 1. STATE (Our Data)
// -----------------------------------------

// A simple array of objects for the weekly plan
const myWeek = [
  { day: "Monday", exercise: "Push-ups", isRestDay: false },
  { day: "Tuesday", exercise: "Squats", isRestDay: false },
  { day: "Wednesday", exercise: "None", isRestDay: true }, // Rest day!
  { day: "Thursday", exercise: "Sit-ups", isRestDay: false },
  { day: "Friday", exercise: "None", isRestDay: true }     // Rest day!
];

// An empty array to hold the actual workouts the user types in
const myDiary = [];


// -----------------------------------------
// 2. NAVIGATION LOGIC
// -----------------------------------------
function switchPage(pageId, clickedLink) {
  // Hide all pages by removing the "active" class
  const allPages = document.querySelectorAll(".page");
  allPages.forEach(function(page) {
    page.classList.remove("active");
  });

  // Show the one we clicked
  document.getElementById("page-" + pageId).classList.add("active");

  // Update the navigation bar colors
  const allLinks = document.querySelectorAll("nav a");
  allLinks.forEach(function(link) {
    link.classList.remove("active");
  });
  clickedLink.classList.add("active");
}


// -----------------------------------------
// 3. RENDER THE SCHEDULE
// -----------------------------------------
function showSchedule() {
  const listElement = document.getElementById("schedule-list");
  listElement.innerHTML = ""; // clear it out

  // FILTER: Create a new array, keeping ONLY the days that are NOT rest days
  const workoutDays = myWeek.filter(function(dayObj) {
    return dayObj.isRestDay === false;
  });

  // MAP: Create a new array, changing the objects into simple text strings
  const textStrings = workoutDays.map(function(dayObj) {
    return dayObj.day + ": " + dayObj.exercise;
  });

  // FOREACH: Loop through our new strings and make bullet points (<li>)
  textStrings.forEach(function(text) {
    listElement.innerHTML += "<li>" + text + "</li>";
  });
}


// -----------------------------------------
// 4. SAVE A WORKOUT
// -----------------------------------------
function saveWorkout() {
  const exerciseInput = document.getElementById("exercise-name").value;
  const repsInput = Number(document.getElementById("rep-count").value);

  // Don't save if they forgot to type a number
  if (repsInput <= 0) {
    alert("Please type a number bigger than 0!");
    return;
  }

  // Create a new object and push it into our diary array
  const newWorkoutObj = {
    name: exerciseInput,
    reps: repsInput
  };
  myDiary.push(newWorkoutObj);

  // Clear the input box for next time
  document.getElementById("rep-count").value = "";

  // Tell the user it worked, then update the diary screen
  alert("Saved! Check your diary.");
  updateDiaryScreen();
}


// -----------------------------------------
// 5. UPDATE THE DIARY SCREEN
// -----------------------------------------
function updateDiaryScreen() {
  const listElement = document.getElementById("diary-list");
  listElement.innerHTML = ""; // clear it out

  // FOREACH: Show every workout we've saved in the diary
  myDiary.forEach(function(entry) {
    listElement.innerHTML += "<li>" + entry.name + " - " + entry.reps + " reps</li>";
  });

  // REDUCE: Add up all the reps to get a grand total.
  // "total" starts at 0. It adds the current entry's reps to the total as it loops.
  const grandTotal = myDiary.reduce(function(total, entry) {
    return total + entry.reps;
  }, 0);

  // Show the total on the screen
  document.getElementById("total-reps").innerText = grandTotal;
}

// Run this function once immediately when the website loads
showSchedule();
