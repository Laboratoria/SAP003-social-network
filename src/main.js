import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Feed from './pages/feed.js';
import isAuthenticated from './auth.js';

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);

function locationHashChanged() {
  if (isAuthenticated()) {
    if (location.hash === '' ||
      location.hash === '#login' ||
      location.hash === '#feed') {
      document.querySelector('main').innerHTML = Feed();
    }
  } else {
    if (location.hash === '#signup') {
      document.querySelector('main').innerHTML = Signup();
    } else {
      document.querySelector('main').innerHTML = Login();
    };
  }
}

//#login página de login
//#signup href do "cadastre-se"
//#feed página do feed
//Logout(), função que faz logout
//Login()função que tem a tela do login
//Signup() função da tela de cadastro
//Signout()função do botão signout