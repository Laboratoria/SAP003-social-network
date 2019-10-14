import login from './pages/login.js';
import timeline from './pages/timeline.js';


function init() {
  document.querySelector('main').innerHTML = login();
}
window.addEventListener('load', init);

function locationHashChanged() {
  if (window.location.hash === '#timeline') {
    document.querySelector('main').innerHTML = timeline();
  }
}
window.addEventListener('hashchange', locationHashChanged, false);
