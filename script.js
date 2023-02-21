window.addEventListener("load", start);
console.log;
("start");

function start() {
  document.querySelector("#zombie1.zombie1").addEventListener("click", jumping);
}

function jumping() {
  console.log("jump");
  document.querySelector("#zombie1.zombie1").addEventListener("click", jumping);
  document.querySelector("#zombie1.zombie1").classList.add("jump");
}
