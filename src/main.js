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

//#login página de login
//#signup href do "cadastre-se"
//#feed página do feed
//Logout(), função que faz logout
//Login()função que tem a tela do login
//Signup() função da tela de cadastro
//Signout()função do botão signout

