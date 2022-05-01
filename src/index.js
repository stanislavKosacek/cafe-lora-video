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
const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
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
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

drinks.forEach((drink) => {
  drinksListElm.appendChild(Drink(drink));
});
