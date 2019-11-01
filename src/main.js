import Login from './pages/login.js';
import Register from './pages/register.js';
import Feed from './pages/feed.js';
import Profile from './pages/profile.js';


function pagesChange() {
  const hash = window.location.hash;
  const query = document.querySelector('main');
  const bodyClass = document.getElementsByTagName('body')[0]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (hash === '#feed') {
        query.innerHTML = Feed();
        bodyClass.className = 'bg-feed'
      } else if (hash === '#profile') {
        query.innerHTML = Profile();
        bodyClass.className = 'bg-profile'
      } else {
        query.innerHTML = Feed();
        bodyClass.className = 'bg-feed'
      }
    } else {
      if (hash === '#register') {
        query.innerHTML = Register();
        bodyClass.className = 'bg-register'
      } else if (hash === '#login') {
        query.innerHTML = Login();
        bodyClass.className = 'bg-login'
      }
    }
  });
}

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);