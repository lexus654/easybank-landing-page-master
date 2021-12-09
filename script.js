"use strict";
// on touch pop up the screen
console.log("hello");
const menu = document.getElementById("nav__menu");
const list = document.getElementById("nav__list");

menu.addEventListener("click", () => {
  list.style.display = "flex";
});

window.onclick = function (e) {
  if (e.target == list) {
    list.style.display = "none";
  }
};
