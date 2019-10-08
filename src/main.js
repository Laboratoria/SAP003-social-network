import Button from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Button();
} 

window.addEventListener('load', init);
