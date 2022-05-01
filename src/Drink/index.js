import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  const { name, image, layers } = props;
  let { ordered } = props;

  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img
          src="${image}"
        />
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>`;

  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  layers.forEach((layer) => {
    drinkInfoElm.innerHTML += Layer(layer);
  });

  const orderBtnElm = drinkElm.querySelector('.order-btn');
  orderBtnElm.addEventListener('click', () => {
    const drinkCupElm = drinkElm.querySelector('.drink__cup');
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

  return drinkElm;
};
