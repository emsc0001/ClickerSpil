"use strict";
window.addEventListener("load", ready);



let points = 0;
let lives = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
}

function startGame() {
 
  points = 0;
  lives = 3;


  document.querySelector("#start").classList.add("hidden");

  startAllAnimations();



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

  document.querySelector("#soundStart").currentTime = 0;
  document.querySelector("#soundStart").play();

  document.querySelector("#zombie1").addEventListener("animationiteration", zombieRestart);
  document.querySelector("#zombie2").addEventListener("animationiteration", zombieRestart);
  document.querySelector("#zombie3").addEventListener("animationiteration", zombieRestart);
}

function startAllAnimations() {
  document.querySelector("#zombie1").classList.add("zombie1");
  document.querySelector("#zombie2").classList.add("zombie2");
  document.querySelector("#zombie3").classList.add("zombie3");
  document.querySelector("#zombie4").classList.add("zombie4");
  document.querySelector("#zombie5").classList.add("zombie5");
}



function clickZombie1() {
  console.log("Click zombie");
  document.querySelector("#zombie1").removeEventListener("click", clickZombie1);
  document.querySelector("#zombie1").classList.add("paused");
  document.querySelector("#zombie1_sprite").classList.add("zoom_out");
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie2() {
  console.log("Click zombie");
  document.querySelector("#zombie2").removeEventListener("click", clickZombie2);
  document.querySelector("#zombie2").classList.add("paused");
  document.querySelector("#zombie2_sprite").classList.add("zoom_out");
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie3() {
  console.log("Click zombie");
  document.querySelector("#zombie3").removeEventListener("click", clickZombie3);
  document.querySelector("#zombie3").classList.add("paused");
  document.querySelector("#zombie3_sprite").classList.add("zoom_out");
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie4() {
  console.log("Click zombie");
  document.querySelector("#zombie4").removeEventListener("click", clickZombie4);
  document.querySelector("#zombie4").classList.add("paused");
  document.querySelector("#zombie4_sprite").classList.add("zoom_out");
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie5() {
  console.log("Click zombie");
  document.querySelector("#zombie5").removeEventListener("click", clickZombie5);
  document.querySelector("#zombie5").classList.add("paused");
  document.querySelector("#zombie5_sprite").classList.add("zoom_out");
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
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
  document.querySelector("#soundFugl").currentTime = 0;
  document.querySelector("#soundFugl").play();
  decrementLives();
}

function zombieGone() {
  
  const zombie = this; 
 
  zombie.removeEventListener("animationend", zombieGone);


  zombie.querySelector("img").classList.remove("zoom_out");


  zombie.classList.remove("paused");

  zombieRestart.call(this);

  zombie.addEventListener("click", clickZombie);
}

function zombieRestart() {
 
  const zombie = this;


  zombie.classList.remove("zombie1");
  zombie.offsetWidth;
  zombie.classList.add("zombie1");

  
  zombie.classList.remove("position1", "position2", "position3", "position4", "position5");

 
  const p = Math.ceil(Math.random() * 5);
  zombie.classList.add(`position${p}`);
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  displayPoints();

  if (points >= 4) {
    levelcomplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  lives--;
  console.log("mist et liv");
  showDecrementedLives();

  if (lives <= 0) {
    gameOver();
  }

  function showDecrementedLives() {
    document.querySelector("#heart" + (lives + 1)).classList.add("broken_heart");
    document.querySelector("#heart" + (lives + 1)).classList.remove("active_heart");
  }

  function showIncrementedLives() {
    document.querySelector("#heart" + lives).classList.add("broken_heart");
    document.querySelector("#heart" + lives).classList.remove("active_heart");
  }

  function gameOver() {
    console.log("Game Over");
    document.querySelector("#game_over").classList.remove("hidden");
    stopGame();
  }

  function level_complete() {
    document.querySelector("#level_complete").classList.remove("hidden");
  
  }

  //TIMER
  const timer = document.getElementById("timer");

  let timeLeft = 30;
}

const timeLeft = document.querySelector(".time-left");

let countdown = 60;
const timer = setInterval(() => {
  countdown--;

  if (countdown < 10) {
    timeLeft.innerHTML = `0${countdown}`;
  } else {
    timeLeft.innerHTML = countdown;
  }

  if (countdown === 0) {
    clearInterval(timer);
    levelcomplete();
  }
}, 1000);
