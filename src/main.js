import login from './pages/login.js';
import timeline from './pages/timeline.js';
import profile from './pages/profile.js';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location = '#timeline';
  } else {
    window.location = '#login';
  }
});

const locationHashChanged = () => {
  const hash = window.location.hash;

  if (hash === '#timeline') {
    document.querySelector('main').innerHTML = timeline();
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  } else if (hash === '#profile') {
    document.querySelector('main').innerHTML = profile();
  }
};

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);
