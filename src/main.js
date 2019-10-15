import login from './pages/login.js';
import timeline from './pages/timeline.js';

const locationHashChanged = () => {
  const hash = window.location.hash;

  if (hash === '#timeline') {
    document.querySelector('main').innerHTML = timeline();
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  } else {
    document.querySelector('main').innerHTML = login();
  }
};

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location = '#timeline';
  } else {
    window.location = '#login';
  }
});
