import Login from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

