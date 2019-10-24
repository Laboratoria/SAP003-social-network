import Login from './pages/login.js';
import Register from './pages/register.js';
import Feed from './pages/feed.js';
import Profile from './pages/profile.js';


function pagesChange() {
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (window.location.hash === '#feed'){
      document.querySelector('main').innerHTML = Feed();   
      document.getElementsByTagName('body')[0].className = 'bg-feed'
    } else if (window.location.hash === '#profile'){
      document.querySelector('main').innerHTML = Profile();   
      document.getElementsByTagName('body')[0].className = 'bg-profile'
    } else {
      document.querySelector('main').innerHTML = Feed();   
    }
  } else {
    if (location.hash === '#register') {
      document.querySelector('main').innerHTML = Register();
      document.getElementsByTagName('body')[0].className = 'bg-register'
    } else {
      location.hash === '#login'
      document.querySelector('main').innerHTML = Login();
      document.getElementsByTagName('body')[0].className = 'bg-login'
    }
  }
}); 
}

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);