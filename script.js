window.addEventListener("load", start);
console.log("så kører vi");

function start() {
  console.log("start");
  document.addEventListener("animationend", constantJump);
  document.querySelector("#blue_container").addEventListener("click", fallover);
}
function constantJump() {
  console.log("jump around");
  document.querySelector("#orange_container").classList.add("jump");
}
function fallover() {
  console.log("TIMBEEEEEEER");
  document.querySelector("#blue_container").classList.add("fallover");
}
