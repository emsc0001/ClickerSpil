"use strict"

let points = 0;
let lives = 3;

window.addEventListener("load", start);
console.log;
("start");


document.querySelector("#zombie1").classList.add("zombie1");
document.querySelector("#zombie1").addEventListener("click", clickZombie1);

document.querySelector("#zombie2").classList.add("zombie2");
document.querySelector("#zombie2").addEventListener("click", clickZombie2);

document.querySelector("#zombie3").classList.add("zombie3");
document.querySelector("#zombie3").addEventListener("click", clickZombie3);

document.querySelector("#zombie4").classList.add("zombie4");
document.querySelector("#zombie4").addEventListener("click", clickZombie4);

document.querySelector("#zombie5").classList.add("zombie5");
document.querySelector("#zombie5").addEventListener("click", clickZombie5);

document.querySelector("#brain1").classList.add("brain1");
document.querySelector("#brain1").addEventListener("click", clickbrain1);

document.querySelector("#bird").classList.add("bird");
document.querySelector("#bird").addEventListener("click", clickBird);


function clickZombie1() {
  console.log("Click zombie");
  // Forhindr gentagne clicks
  document.querySelector("#zombie1").removeEventListener("click", clickZombie1);

  // Stop coin container
  document.querySelector("#zombie1").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#zombie1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#zombie1").addEventListener("animationend", zombieGone);
  increasePoint();
}

function clickZombie2() {
  console.log("Click zombie");
  // Forhindr gentagne clicks
  document.querySelector("#zombie2").removeEventListener("click", clickZombie2);

  // Stop coin container
  document.querySelector("#zombie2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#zombie2_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#zombie2").addEventListener("animationend", zombieGone);
  increasePoint();
}

function clickZombie3() {
  console.log("Click zombie");
  // Forhindr gentagne clicks
  document.querySelector("#zombie3").removeEventListener("click", clickZombie3);

  // Stop coin container
  document.querySelector("#zombie3").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#zombie3_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#zombie3").addEventListener("animationend", zombieGone);
  decreaseLives();
  decreasePoint();
}

function clickZombie4() {
  console.log("Click zombie");
  // Forhindr gentagne clicks
  document.querySelector("#zombie4").removeEventListener("click", clickZombie4);

  // Stop coin container
  document.querySelector("#zombie4").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#zombie4_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#zombie4").addEventListener("animationend", zombieGone);
}

function clickZombie5() {
  console.log("Click zombie");
  // Forhindr gentagne clicks
  document.querySelector("#zombie5").removeEventListener("click", clickZombie5);

  // Stop coin container
  document.querySelector("#zombie5").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#zombie5_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#zombie5").addEventListener("animationend", zombieGone);
}

function clickbrain1() {
  console.log("Click brain1");
  // Forhindr gentagne clicks
  document.querySelector("#brain1").removeEventListener("click", brain1);

  // Stop coin container
  document.querySelector("#brain1").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#brain1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#brain1").addEventListener("animationend", brainGone);
}



function clickBird() {
  console.log("Click bird");
  document.querySelector("#bird").removeEventListener("click", clickBird);
  document.querySelector("#bird").classList.add("paused");
  document.querySelector("#bird_sprite").classList.add("zoom_out");
  document.querySelector("#bird").addEventListener("animationend", birdGone);
  decreaseLives();
  decreasePoint();
}

function increasePoint() {
  console.log("increase point virker");
  points++;
  displayPoints();
}

function decreasePoint() {
  points--;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#points").textContent = points;
}

function decreaseLives() {
  console.log("decreaseLives");
  displayDecreaseLives();
  lives--;
}

function displayDecreaseLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function displayLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

// Get the timer element
const timer = document.getElementById('timer');

// Set the initial time
let timeLeft = 30;

// Create a function to update the timer
function updateTimer() {
  // Calculate the minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Format the time string
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the timer text
  timer.innerText = timeString;

  // Decrement the time
  timeLeft--;

  // Check if the time has run out
  if (timeLeft === -1) {
    // Stop the timer
    clearInterval(timerInterval);
  }
}
