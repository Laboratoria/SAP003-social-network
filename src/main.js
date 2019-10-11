import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

// function init() {
//   if (!location.hash){
//     window.location='#login'
//   }
// }
// window.addEventListener('load', init);



function locationHashChanged() {
  switch (location.hash) {
    case '#register':
      firebase.auth().onAuthStateChanged(function (user) {
        user ? window.location='#home' : document.querySelector('main').innerHTML = Register();
      });
    break;
    case  '#home':
      firebase.auth().onAuthStateChanged(function (user) {
        user ? document.querySelector('main').innerHTML = Home() : window.location='#login'
        console.log(user)
        });      
    break;
    case '#login':
      firebase.auth().onAuthStateChanged(function (user) {
        user ? window.location='#home' : document.querySelector('main').innerHTML = Login()
        });       
    break;  
    case '#profile':
      firebase.auth().onAuthStateChanged(function (user) {
        user ? document.querySelector('main').innerHTML = Profile() : window.location='#login'
      });
    break;
    default:  
      firebase.auth().onAuthStateChanged(function (user) {
        user ? document.querySelector('main').innerHTML = Home() : window.location='#login'
    }); 
  }
}


window.addEventListener('hashchange', locationHashChanged, false)
window.addEventListener('load', locationHashChanged, false)