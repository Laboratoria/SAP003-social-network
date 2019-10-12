import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

const main = document.querySelector('main');

function init() {
  main.innerHTML = Login();
}

function onHashChange() {
  switch (location.hash) {
    case '#register':
      main.innerHTML = Register();
      break;
    case '#login':
      main.innerHTML = Login();
      break;
    case '#home':
      main.innerHTML = Home();
      break;
    default:
      '404 page not found';
  }
}

window.onhashchange = onHashChange;
window.addEventListener('load', init);
