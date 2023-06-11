const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const skillContents = document.getElementsByClassName('skill-content');
const skillHeaders = document.querySelectorAll('.skill-header');

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
}

skillHeaders.forEach((eL) => {
  eL.addEventListener('click', toggleSkill)
})