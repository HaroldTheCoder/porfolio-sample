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

//Header Parallax Effect 
window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	var startButton = document.querySelector('.start-button');
	var startText = document.querySelector('.start-text');
	header.classList.toggle("parallax-mobile", window.scrollY > 0);
	startButton.classList.toggle("parallax-mobile", window.scrollY > 0);
	startText.classList.toggle("parallax-mobile", window.scrollY > 0);
})

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

  var icon = document.getElementById("icon");
  

	icon.onclick = function() {
		var header = document.querySelector("#welcome-section");
		var navLink = document.querySelectorAll('.nav-link');
		var startText = document.querySelector('.start-text');
		var serviceBox = document.querySelectorAll('.service-box');
		var skillSection = document.querySelector('.skill-container');
		var insideCircle = document.querySelectorAll('.inside-circle');
		var socialIcon = document.querySelectorAll('.fa');
		var contactInfo = document.querySelector('.contact-info');
		var topButton = document.querySelector('.top-button');
		var footer = document.querySelector('#main-footer');
		var menuBar = document.querySelectorAll('.bar');

         document.body.classList.toggle("light-theme");
		 header.classList.toggle("light-theme");
		 startText.classList.toggle("light-theme");
		 navLink.forEach((n) => n.classList.toggle("light-theme"));
		 serviceBox.forEach((s) => s.classList.toggle("light-theme"));
		 skillSection.classList.toggle("light-theme");
		 insideCircle.forEach((c) => c.classList.toggle("light-theme"));
		 socialIcon.forEach((m) => m.classList.toggle("light-theme"));
		 contactInfo.classList.toggle('light-theme');
		 topButton.classList.toggle('light-theme');
		 footer.classList.toggle("light-theme");
		menuBar.forEach((b) => b.classList.toggle('light-theme'));

        if(document.body.classList.contains("light-theme")) {
            icon.src = "images/moon.png";
        } else {
                icon.src = "images/sun.png";
        }
	}