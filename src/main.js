import Login from './pages/login.js';
import Register from './pages/register.js';

function init() {

  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);
