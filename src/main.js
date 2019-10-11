
// import Home from './pages/home.js';
import Login from './pages/login.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init); 
