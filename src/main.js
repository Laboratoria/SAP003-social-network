import login from './pages/login.js';

function init() {
  document.querySelector('main').innerHTML = login();
}

window.addEventListener('load', init);
