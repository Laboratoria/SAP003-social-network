import Feed from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Feed();
}

window.addEventListener('load', init);
