import Login from './pages/login.js';
import Home from './pages/home.js';
import Perfil from './pages/perfil.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

function locationHashChanged() {
  if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === '#home') {
    document.querySelector('main').innerHTML = Home();
  } else if (location.hash === '#perfil') {
    document.querySelector('main').innerHTML = Perfil();
  }
}

window.onhashchange = locationHashChanged;
