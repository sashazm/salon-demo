// To Target The Hamburger Main Toggle
const navToggle = document.querySelector('.js-main-nav-toggle');
const menu = document.querySelector('.header-main__nav');
const menuToggle = document.querySelector('.js-menu-toggle');
// Event listener to change toggle state icon
navToggle.addEventListener('click', toggleStatus);
menuToggle.addEventListener('click', hideMenu)

// // function to switch between toggle states
function toggleStatus () {
  toggleNavClass()
  toggleMenu()
}


function toggleNavClass () {
  if (navToggle.className.includes('nav-toggle--active')) {
    navToggle.classList.remove('nav-toggle--active');
  } else {
    navToggle.classList.add('nav-toggle--active');
  }
}

// to slide the side menu open and closed
function toggleMenu () {
  if (menu.className.includes('header-main__nav--active')) {
    menu.classList.remove('header-main__nav--active');
  } else {
    menu.classList.add('header-main__nav--active');
  }
}

// Slides menu to the left out of the view
function hideMenu() {
  menu.classList.remove('header-main__nav--active');
  navToggle.classList.remove('nav-toggle--active');
}