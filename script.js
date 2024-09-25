const hamburger = document.querySelector('.mobile-hamburger-menu');
const navMenu = document.querySelector('.navbar-buttons');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});