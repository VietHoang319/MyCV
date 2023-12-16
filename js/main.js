const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const navLink = document.querySelectorAll('.nav-link');
const skillContents = document.getElementsByClassName('skill-content');
const skillHeaders = document.querySelectorAll('.skill-header');
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  });
}

function linkAction() {
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function toggleSkill() {
  let itemClass = this.parentNode.className;

  // for (let i = 0; i < skillContents.length; i++) {
  //   skillContents[i].className = 'skill-content skill-close';
  // }

  if (itemClass === 'skill-content skill-close') {
    this.parentNode.className = 'skill-content skill-open';
  } else {
    this.parentNode.className = 'skill-content skill-close';
  }
};

skillHeaders.forEach(eL => {
  eL.addEventListener('click', toggleSkill);
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification-active');
    });
    target.classList.add('qualification-active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification-active');
    });
    tab.classList.add('qualification-active');
  })
})

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

function scrollHeader() {
  const nav = document.getElementById('header');
  
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

function scrollTop() {
  const scrollUp = document.getElementById('scrollUp');

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollTop);

const themeButton = document.getElementById('themeButton');
const darkTheme = 'dark-theme';
const iconTheme =  'uil-sun';

const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selectedTheme', getCurrentTheme());
  localStorage.setItem('selectedIcon', getCurrentIcon());
});