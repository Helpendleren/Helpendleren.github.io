// Set the time limit to 25 minutes (in seconds)
const timeLimit = 25 * 60;

// Select the timer element from the DOM
const timerElement = document.getElementById('timer');

// Initialize the time remaining variable
let timeRemaining = timeLimit;

// Create an interval that updates the timer every second
const timerInterval = setInterval(() => {
  // Calculate the minutes and seconds remaining
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Update the timer element with the new time remaining
  timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // If the time has run out, stop the interval and display a message
  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's up!";
  }

  // Update the time remaining
  timeRemaining--;
}, 1000);