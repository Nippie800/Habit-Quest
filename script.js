// Store habits in an array (later we’ll use localStorage on Day 5)
let habits = [];

// Select DOM elements
const habitForm = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habitList = document.getElementById("habit-list");

// Handle form submit
habitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newHabit = habitInput.value.trim();
  if (newHabit) {
    habits.push({ name: newHabit, completed: false });
    habitInput.value = "";
    renderHabits();
  }
});

// Render habits to the page
function renderHabits() {
  habitList.innerHTML = ""; // Clear list

  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.textContent = habit.name;
    habitList.appendChild(li);
  });
}

