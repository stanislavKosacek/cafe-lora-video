import './style.css';

const navBtnElm = document.querySelector('#nav-btn');
navBtnElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const navLinkElms = document.querySelectorAll('nav a');
navLinkElms.forEach((navLinkElm) => {
  navLinkElm.addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
});

const orderBtnElm = document.querySelector('.order-btn');
let ordered = false;
orderBtnElm.addEventListener('click', () => {
  const drinkCupElm = document.querySelector('.drink__cup');
  if (!ordered) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
