import Login from './pages/login.js';
import Register from './pages/register.js';

function init() {
  console.log(firebase.auth())
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);
