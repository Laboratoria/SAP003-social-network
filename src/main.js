// import Login from './pages/login.js';
import Signup from './pages/signup.js';

function init() {
  document.querySelector('main').innerHTML = Signup();
}

window.addEventListener('load', init);