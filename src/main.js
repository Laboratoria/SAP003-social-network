import Login from './pages/login.js';
import Register from './pages/register.js';

function pagesChange() {
  if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  }
};

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);
