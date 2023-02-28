"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");
}

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

document.querySelector("#brain2").classList.add("brain2");
document.querySelector("#brain2").addEventListener("click", clickbrain2);

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
  document.querySelector("#zombie1").addEventListener("animationend", zombiegone);
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
  document.querySelector("#zombie2").addEventListener("animationend", zombiegone);
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
  document.querySelector("#zombie3").addEventListener("animationend", zombiegone);
  incrementPoints();
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
  document.querySelector("#zombie4").addEventListener("animationend", zombiegone);
  incrementPoints();
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
  incrementPoints();
}

function clickbrain1() {
  console.log("Click brain1");
  document.querySelector("#brain1").removeEventListener("click", brain1);
  document.querySelector("#brain1").classList.add("paused");
  document.querySelector("#brain1_sprite").classList.add("zoom_out");
  decrementLives();
}

function clickbrain2() {
  console.log("Click brain2");
  document.querySelector("#brain2").removeEventListener("click", brain2);
  document.querySelector("#brain2").classList.add("paused");
  document.querySelector("#brain2_sprite").classList.add("zoom_out");
  decrementLives();
}

function clickBird() {
  console.log("Click bird");
  document.querySelector("#bird").removeEventListener("click", clickBird);
  document.querySelector("#bird").classList.add("paused");
  document.querySelector("#bird_sprite").classList.add("zoom_out");
  decrementLives();
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
  if (points >= 5) {
    levelcomplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");
  showDecrementedLives();
  lives--;
  if (lives <= 0) {
    gameover();
  }
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function gameover() {
  document.querySelector("#game_over").classList.remove("hidden");
}

function levelcomplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
}
