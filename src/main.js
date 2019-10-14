import Login from './pages/login.js';
import Register from './pages/register.js';

function pagesChange() {    
  
  document.querySelector('main').innerHTML = Login();
  if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
/*     document.getElementsByTagName("body")[0].className = "banana" */
  } else if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
/*     document.getElementsByTagName("body")[0].className = "peixinho" */
  }
};

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);
