"use strict";
window.addEventListener("load", ready);

document.body.style.overflow = "hidden";
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;


let points = 0;
let lives = 0;



function ready() {
  console.log("JavaScript kører");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function startGame() {
  points = 0;
  lives = 3;

  document.querySelector("#start").classList.add("hidden");

  startAllAnimations();
  resetLives();
  resetPoints();
  startPositioner();

  

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

  var soundBG = document.querySelector("#soundBG");
  soundBG.volume = 0.2;
  soundBG.play();

  startTimer();
  
  
  function resetLives() {
    lives = 3;
    document.querySelector("#heart1").classList.remove("broken_heart");
    document.querySelector("#heart2").classList.remove("broken_heart");
    document.querySelector("#heart3").classList.remove("broken_heart");
    document.querySelector("#heart1").classList.add("active_heart");
    document.querySelector("#heart2").classList.add("active_heart");
    document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
    points = 0;
    displayPoints();
}
}


function startTimer() {
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
  document.querySelector("#time_sprite").classList.add("shrink");
  document.querySelector("#time_sprite").addEventListener("animationend", timerSlut);
}


 function timerSlut() {
    console.log("Timeren er slut!");
  
    if (points >= 15) {
      levelComplete();
    } else {
      gameOver();
      stopGame();
    }
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
  document.querySelector("#zombie1").addEventListener("animationend", zombieGone);
  document.querySelector("#zombie1").addEventListener("click", clickZombie1);
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie2() {
  console.log("Click zombie");
  document.querySelector("#zombie2").removeEventListener("click", clickZombie2);
  document.querySelector("#zombie2").classList.add("paused");
  document.querySelector("#zombie2_sprite").classList.add("zoom_out");
  document.querySelector("#zombie2").addEventListener("animationend", zombieGone);
  document.querySelector("#zombie2").addEventListener("click", clickZombie2);
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie3() {
  console.log("Click zombie");
  document.querySelector("#zombie3").removeEventListener("click", clickZombie3);
  document.querySelector("#zombie3").classList.add("paused");
  document.querySelector("#zombie3_sprite").classList.add("zoom_out");
  document.querySelector("#zombie3").addEventListener("animationend", zombieGone);
  document.querySelector("#zombie3").addEventListener("click", clickZombie3);
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie4() {
  console.log("Click zombie");
  document.querySelector("#zombie4").removeEventListener("click", clickZombie4);
  document.querySelector("#zombie4").classList.add("paused");
  document.querySelector("#zombie4_sprite").classList.add("zoom_out");
  document.querySelector("#zombie4").addEventListener("animationend", zombieGone);
  document.querySelector("#zombie4").addEventListener("click", clickZombie4);
  document.querySelector("#soundMonster").currentTime = 0;
document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickZombie5() {
  console.log("Click zombie");
  document.querySelector("#zombie5").removeEventListener("click", clickZombie5);
  document.querySelector("#zombie5").classList.add("paused");
  document.querySelector("#zombie5_sprite").classList.add("zoom_out");
  document.querySelector("#zombie5").addEventListener("animationend", zombieGone);
  document.querySelector("#zombie5").addEventListener("click", clickZombie5);
  document.querySelector("#soundMonster").currentTime = 0;
  document.querySelector("#soundMonster").play();
  incrementPoints();
}

function clickbrain1() {
  console.log("Click brain1");
  document.querySelector("#brain1").removeEventListener("click", brain1);
  document.querySelector("#brain1").classList.add("paused");
  document.querySelector("#brain1_sprite").classList.add("zoom_out");
  document.querySelector("#brain1").addEventListener("click", clickbrain1);
  document.querySelector("#soundBrain").currentTime = 0;
  document.querySelector("#soundBrain").play();
  decrementLives();
}

function clickbrain2() {
  console.log("Click brain2");
  document.querySelector("#brain2").removeEventListener("click", brain2);
  document.querySelector("#brain2").classList.add("paused");
  document.querySelector("#brain2_sprite").classList.add("zoom_out");
  document.querySelector("#brain2").addEventListener("animationend", zombieGone);
  document.querySelector("#brain2").addEventListener("click", clickbrain2);
  document.querySelector("#soundBrain").currentTime = 0;
  document.querySelector("#soundBrain").play();
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

  zombie.addEventListener("click", clickZombie1);
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
  points = points + 1;
  console.log("Giv point");
  displayPoints();

  if (points >= 15) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("vis points");
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

var restartButton = document.getElementById("btn_restart");
restartButton.addEventListener("click", function() {
    location.reload();
});
}


function gameOver() {
  console.log("Game Over");
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#soundLose").currentTime = 0;
  document.querySelector("#soundLose").play();
  stopGame();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#soundWin").play();
  stopGame();
}

function startPositioner() {
document.querySelector("#zombie1").classList.add("position1");
document.querySelector("#zombie2").classList.add("position2");
document.querySelector("#zombie3").classList.add("position3");
document.querySelector("#zombie4").classList.add("position4");
document.querySelector("#zombie5").classList.add("position5");
document.querySelector("#brain1").classList.add("position6");
document.querySelector("#brain2").classList.add("position7");
}

function stopGame() {
  console.log("stop game");
  isGameRunning = false;

  document.querySelector("#zombie1").classList.remove("zombie1");
  document.querySelector("#zombie2").classList.remove("zombie2");
  document.querySelector("#zombie3").classList.remove("zombie3");
  document.querySelector("#zombie4").classList.remove("zombie4");
  document.querySelector("#zombie5").classList.remove("zombie5");

  document.querySelector("#zombie1").removeEventListener("mousedown", clickZombie1);
  document.querySelector("#zombi2").removeEventListener("mousedown", clickZombie2);
  document.querySelector("#zombie3").removeEventListener("mousedown", clickZombie3);
  document.querySelector("#zombie4").removeEventListener("mousedown", clickZombie4);
  document.querySelector("#zombie5").removeEventListener("mousedown", clickZombie5);
 
  document.querySelector("#sound_game").pause();
}