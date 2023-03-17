// Accessibility for Navbar Toggler
//   const navbarToggler = document.getElementById('navbar-toggler');

// if(navbarToggler.checked == true) {
//   navbarToggler.getAttribute('aria-expanded') = true;
// } else {
//   navbarToggler.getAttribute('aria-expanded') = false;
// }

// Navbar hide/show when scroll
const navbar = document.querySelector('.navbar');
let prevscrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(prevscrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-60px';
  }
  prevscrollPos = currentScrollPos;
}
  