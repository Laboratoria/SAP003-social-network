import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Feed from './pages/feed.js';
//import isAuthenticated from './auth.js';

window.addEventListener('load', function() {
  window.location = '#login';
  locationHashChanged(); 
});
window.addEventListener("hashchange", locationHashChanged, false);


function locationHashChanged() {
  if (location.hash === '#login'){
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === '#feed') {
    document.querySelector('main').innerHTML = Feed();
  } else if (location.hash === '#signup') {
    document.querySelector('main').innerHTML = Signup();
  }
}