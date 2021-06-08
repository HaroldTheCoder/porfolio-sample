// Fixed Navbar
window.addEventListener("scroll", function () {
	var navBar = document.querySelector("#navBar");
	var linkNav = document.querySelectorAll(".nav-link");
	var navButton = document.querySelectorAll(".bar");
	navBar.classList.toggle("active", window.scrollY > 0);
	linkNav.forEach((n) => n.classList.toggle("link-active", window.scrollY > 5));
	navButton.forEach((m) => m.classList.toggle("mobile-active", window.scrollY > 5));
});

// Button function
window.addEventListener("scroll", function () {
	var topButton = document.querySelector(".top-button");
	topButton.classList.toggle("button-active", window.scrollY > 4200);

});
// Skill-Div Parallax function
window.addEventListener("scroll", function () {
	var diV = document.querySelector("#skill-section");
	var range = document.querySelectorAll(".fill");
	var full = document.querySelectorAll(".full");
	diV.classList.toggle("div-active", window.scrollY > 2300);
	range.forEach((m) => m.classList.toggle("skill-active", window.scrollY > 2650));
	full.forEach((n) => n.classList.toggle("range-active", window.scrollY > 2650)
	);
});
// Skill-Div Parallax Mobile function 
window.addEventListener("scroll", function () {
	var diV = document.querySelector("#skill-section");
	var range = document.querySelectorAll(".fill");
	var full = document.querySelectorAll(".full");
	diV.classList.toggle("div-active-mobile", window.scrollY > 15000);
	range.forEach((m) => m.classList.toggle("skill-active-mobile", window.scrollY > 10000));
	full.forEach((n) => n.classList.toggle("range-active-mobile", window.scrollY > 10000)
	);
});
// Hamburger function
const hamburger = document.querySelector(".nav-button");
const navMenu = document.querySelector(".mobile-navigation");
const home = document.querySelector("#main-content");
hamburger.addEventListener("click", openNav);
function openNav() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	home.classList.toggle("active");
}
const navLink = document.querySelectorAll(".mobile-link");
navLink.forEach((n) => n.addEventListener("click", closeNav));
function closeNav() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	home.classList.remove("active");
}

//Parallax Effect 
window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	header.classList.toggle('parallax-mobile', window.scrollY > 5);
})