import Home from './pages/home.js';
import register from './pages/register.js';
import timeline from './pages/feed.js';

function init() {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      document.querySelector('main').innerHTML = Home();
    } else if (user) {
      document.querySelector('main').innerHTML = timeline();

    }

  })
}

window.addEventListener('load', init);


function locationHashChanged() {
  switch (location.hash) {
    case ('#register'):
      document.querySelector('main').innerHTML = register();
      break;
    case ('#home'):
      document.querySelector('main').innerHTML = Home();
      break;
    case ('#feed'):
      document.querySelector('main').innerHTML = timeline();

      break;
    default:
      document.querySelector('main').innerHTML = Home();
  }

}
window.addEventListener('hashchange', locationHashChanged, false);