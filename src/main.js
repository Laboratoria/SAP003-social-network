
import Home from './pages/home.js';
import Login from './pages/login.js';


function init() {
  document.querySelector('main').innerHTML = Login();
}


const pages = {
  home: Home(),
  login: Login(),
}

// function locationHashChanged() { 
//   if (window.location.hash === '#login') { 
//     document.querySelector('main').innerHTML = Login(); 
//   } 
//   if (window.location.hash === '#home') { 
//     document.querySelector('main').innerHTML = Home(); 
//   } 
// } 

// window.onhashchange = locationHashChanged;
//


window.addEventListener('load', init); 
//mudança da página
window.addEventListener('hashchange', function() {
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
}, false);