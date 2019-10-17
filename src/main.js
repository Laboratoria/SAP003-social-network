import Home from './pages/home.js';
import Login from './pages/login.js';

function router() {
  if (window.location.hash === '#home') {
    document.querySelector('main').innerHTML = Home();
  } else {
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
