// import Login from './components/login.js';
import Home from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Home();
}

window.addEventListener('load', init);
