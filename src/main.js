import TemplateLogin from './pages/login.js';
import feed from './pages/home.js';
import newUserTemplate from './pages/createAccount.js';

function init() {
  document.querySelector('main').innerHTML = 'Carregando...';
}

function locationHasChange() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.user = {
        email: user.email,
        uid: user.uid,
      };
      window.location.hash = '#feed';
      document.querySelector('main').innerHTML = feed();
      window.loadPost();
    } else if (!window.location.hash || window.location.hash === '#login') {
      document.querySelector('main').innerHTML = TemplateLogin();
    } else if (window.location.hash === '#createAccount') {
      document.querySelector('main').innerHTML = newUserTemplate();
    }
  });
}

locationHasChange();
window.addEventListener('hashchange', locationHasChange, false);

window.addEventListener('load', init);
