// scripts.js
// $(function () {
//   alert("hello");
// });

const navButton = document.getElementById("nav-button");

const nav = document.getElementById("nav");

// function to show and hide nav
navButton.addEventListener("click", (_) => nav.classList.toggle("nav-active"));

const $btnPrevNext = $("#prev, #next");
$btnPrevNext.mouseDown(function (e) {
  e.preventDefault();
});
