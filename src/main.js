import Home from './pages/home.js';
import login from './pages/login.js';

function init() {
  document.querySelector('main').innerHTML = Home();
  Object.values(login).forEach( f => f() );
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.addEventListener('load', init);
