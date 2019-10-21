import Login from './pages/login.js';
import Register from './pages/register.js';
import Post from './pages/post.js';
import Update from './pages/update.js'

window.addEventListener('load', acesspages);

function acesspages () {
  firebase.auth().onAuthStateChanged(function (user) {
  switch (location.hash) {
    case "#register":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Register();
    break;
    case "#login":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Login();
    break;
    case "#update":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Update();
    break;
    case "#post" :
      user ? document.querySelector('main').innerHTML = Post() : window.location = "#login";
    break
    default:
      window.location = "#login";
  }})
}

window.addEventListener('hashchange', acesspages, false);
window.addEventListener('load', acesspages);
