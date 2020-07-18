//variables

const navButton = document.getElementById('nav-button');

const nav = document.getElementById('nav');

// function to show and hide nav
navButton.addEventListener('click', _ => nav.classList.toggle('active'));