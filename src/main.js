// import Home from './pages/home';
import TemplateLogin from './pages/login.js';
import Feed from './pages/home.js';
import newUserTemplate from './pages/createAccount.js';

function init() {
  document.querySelector('main').innerHTML = TemplateLogin();
}

function locationHasChange() {
  if (location.hash === "#createAccount") {
    document.querySelector('main').innerHTML = newUserTemplate();
  } else if (location.hash === "#feed"){
    document.querySelector('main').innerHTML = Feed();
  }
}

window.addEventListener('hashchange', locationHasChange, false);

// export default locationHasChange;

// function initFeed() {
//   document.querySelector('main').innerHTML = Feed();

// }
window.addEventListener('load', init);
