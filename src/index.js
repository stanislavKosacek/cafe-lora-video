import { Drink } from './Drink/index.js';
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

const drinksListElm = document.querySelector('.drinks-list');
const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
drinksListElm.appendChild(Drink(drink));
