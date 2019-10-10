import Login from './pages/login.js';
//import Signup from './pages/signup.js';
// import Signout from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}
window.addEventListener('load', init);

