import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}
window.addEventListener('load', init);

function locationHashChanged() {
  if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  } else if (location.hash === '#home'){
    document.querySelector('main').innerHTML = Home()
  }
}

window.addEventListener("hashchange", locationHashChanged, false);
