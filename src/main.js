import login from './pages/login.js';
import register from './pages/register.js';
import home from './pages/home.js';
import profile from './pages/profile.js';


function locationHashChanged() {
  firebase.auth().onAuthStateChanged(function(user) {
    switch (location.hash) {

      case '#register.js': 
        user ? window.location = '#home.js' : 
        document.querySelector('main').innerHTML = register();
        break;

      case '#home.js': 
        user ? document.querySelector('main').innerHTML = home() :
        window.location = '#login.js';        
        break;
      
      case '#login.js': 
        user ? window.location = '#home.js' : 
        document.querySelector('main').innerHTML = login();
        break;

      case '#profile.js': 
        user ? document.querySelector('main').innerHTML = profile() :
        window.location = '#login.js';        
        break;

      default:
        window.location = '#login.js'

    }
  })        
}

window.addEventListener("load", locationHashChanged, false);
window.addEventListener("hashchange", locationHashChanged, false);

