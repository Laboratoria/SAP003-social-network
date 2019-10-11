import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';


function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);


function locationHashChanged() {
  switch (location.hash) {
    case '#register.js':
    document.querySelector('main').innerHTML = Register();
    break;
    case '#home.js':
    document.querySelector('main').innerHTML = Home();
    break;
    case '#login.js':
    document.querySelector('main').innerHTML = Login();
    break;
      
  }
  
}

window.addEventListener("hashchange", locationHashChanged, false);
