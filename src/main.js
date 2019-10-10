
// import Home from './pages/home';
//import TemplateLogin from './pages/login.js';
import newUserTemplate from './pages/createAccount.js'

function init() {
  document.querySelector('main').innerHTML = newUserTemplate();
  
import Feed from './pages/home.js';

function initFeed() {
  document.querySelector('main').innerHTML = Feed();
  
}
window.addEventListener('load', init);
