// import Home from './pages/home';
//import TemplateLogin from './pages/login.js';
import newUserTemplate from './pages/createAccount.js'

function init() {
  document.querySelector('main').innerHTML = newUserTemplate();
}
window.addEventListener('load', init);
