import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Signout from './pages/feed.js';
import isAuthenticated from './auth.js';

window.addEventListener('load', locationHashChanged);
window.addEventListener("hashchange", locationHashChanged, false);


function locationHashChanged(){
  if (!isAuthenticated()){
    location.hash = '#login'
    document.querySelector('main').innerHTML = Login();
  }
  else if (location.hash ==='#feed') {
    document.querySelector('main').innerHTML = Signout();
  } 
  else if(location.hash ==='#signup'){
  document.querySelector('main').innerHTML = Signup();
  }
  else if(location.hash ==='#login'){
  document.querySelector('main').innerHTML = Login();
  }
}

