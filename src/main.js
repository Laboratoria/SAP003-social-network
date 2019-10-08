// import Home from './pages/home.js';
import Register from './pages/register.js';
// import Login from './pages/login.js';

function init() {
  document.querySelector('main').innerHTML = Register();
}

window.addEventListener('load', init);
