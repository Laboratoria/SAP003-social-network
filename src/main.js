import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

const main = document.querySelector('main');
const body = document.querySelector('body');

function init() {
  main.innerHTML = Login();
}

function onHashChange() {
  switch (window.location.hash) {
    case '#register':
      body.className = "background";
      main.innerHTML = Register();
      break;
    case '#login':
      body.className = "background";
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
