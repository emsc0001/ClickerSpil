"use strict"

window.addEventListener("load", start);
console.log;
("start");

let points = 0;
let lives = 3;

function displayIncrementedLives() {
  console.log("#heart" + lives);
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function incrementLives() {
  console.log("incrementLives");
  displayIncrementedLives();
  lives++;
}

function decrementPoints() {
  console.log("decrementPoints");
  points--;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#coin_count").textContent = points;}


document.querySelector("#zombie1").classList.add("zombie1");
document.querySelector("#zombie1").addEventListener("click", clickZombie1);

document.querySelector("#zombie2").classList.add("zombie2");
document.querySelector("#zombie2").addEventListener("click", clickZombie2);

document.querySelector("#zombie3").classList.add("zombie3");
document.querySelector("#zombie3").addEventListener("click", clickZombie3);

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
  incrementPoints();
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
  incrementPoints();
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
  incrementPoints();
}

function clickBird() {
  console.log("Click bird");
  // Forhindr gentagne clicks
  document.querySelector("#bird").removeEventListener("click", clickBird);

  // Stop coin container
  document.querySelector("#bird").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bird_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#bird").addEventListener("animationend", birdGone);
  decrementLives();
}