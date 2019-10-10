import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js'

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);


function locationHashChanged() {
  switch (location.hash) {
    case '#register':
    document.querySelector('main').innerHTML = Register();
    break;
    case  '#home':
    document.querySelector('main').innerHTML = Home()
    break;
    case '#login':
    document.querySelector('main').innerHTML = Login()
    break;  
    case '#profile':
    document.querySelector('main').innerHTML = Profile()
    break;
  }
}


window.onhashchange = locationHashChanged;