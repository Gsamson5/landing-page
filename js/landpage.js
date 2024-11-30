const navbar = document.querySelector(".nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const navBack = document.querySelector("#nav");
const date = document.querySelector("#date");


// page scrolling 
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

// show sidebar
navBtn.addEventListener("click", function () {
    navBack.classList.add("show-nav");
});
closeBtn.addEventListener("click", function () {
    navBack.classList.remove("show-nav");
});
// set year
date.innerHTML = new Date().getFullYear();
