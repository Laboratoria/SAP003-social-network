import Login from './pages/login.js';
import Register from './pages/register.js';
import Feed from './pages/feed.js';


function pagesChange() {
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (window.location.hash = '#feed'){
        document.querySelector('main').innerHTML = Feed();   
        }
      
    }  else if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
    } else {
      location.hash === '#login'
      document.querySelector('main').innerHTML = Login();
  }
})
};

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);



    //document.getElementByTagName("body")[0].className = "peixinho"