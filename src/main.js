import Home from './pages/home.js';

function init() {
  document.querySelector('main').appendChild(Home());
}

window.addEventListener('load', init);
