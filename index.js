
// Enable hidden header bar
{
  const nav = document.querySelector("header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && window.scrollY > 50) {
      nav.classList.add("header-hidden");
    } else {
      nav.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;
  });
}

// mobile navigation

let nav_button = document.getElementById('hamburger');
let nav_block = document.getElementById('mobile-nav');
let link_buttons = document.getElementsByClassName('l');
let toggle = false;

const toggleOn = () => {
  nav_block.style.right = '0';
  document.body.classList.add('toggle-scroll');
  toggle = true;
}

const toggleOff = () => {
  nav_block.style.right = '-80vw';
  document.body.classList.remove('toggle-scroll');
  toggle = false;
}

nav_button.onclick = entry => {
  if (toggle === false) {
    toggleOn();
  } else {
    toggleOff();
  }
}

for (let i=0; i<link_buttons.length; i++) {
  link_buttons[i].onclick = entry => {
    if (toggle === true) {
      toggleOff();
      togglMobileMenu();
    }
  }
}

// toggle mobile hamburger nav button

const menu = document.querySelector('.menu');


const togglMobileMenu = () => { 
  menu.classList.toggle('opened');
  menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
}

menu.onclick = togglMobileMenu;

// fade in animation 

const elementsList = document.querySelectorAll('.block-fadeIn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
      entry.target.classList.add('animate__fadeInUp');
    } // else 
  })
});

elementsList.forEach(entry => {
  observer.observe(entry);
});

// after 1100 ms remove header animation - for avoiding error
document.body.classList.add('toggle-scroll');
document.getElementById('header').classList.add('animate__fadeInDown');
function timeFunction() {
  setTimeout(function(){ 
    document.getElementById('header').classList.remove('animate__fadeInDown');
    document.body.classList.remove('toggle-scroll');
  }, 1100);
}
timeFunction();
