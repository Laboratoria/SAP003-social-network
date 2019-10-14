import Login from './pages/home.js';
import Register from './pages/register.js';
import NewPage from './pages/newpage.js';

function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#home';
  switch (pageName) {
    case '#home':
      document.querySelector('main').innerHTML = Login();
      break;
    case '#newpage':
      document.querySelector('main').innerHTML = NewPage();
      break;
    case '#register':
      document.querySelector('main').innerHTML = Register();
      break;
    default:
      document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);  
