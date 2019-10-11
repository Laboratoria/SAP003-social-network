// import Home from './pages/home.js';
import Register from './pages/register.js';
import NewPage from './pages/newpage.js';

function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#register';
  switch (pageName) {
    case '#register':
      document.querySelector('main').innerHTML = Register();
      break;
    case '#newpage':
      document.querySelector('main').innerHTML = NewPage();
      break;
    default:
      document.querySelector('main').innerHTML = Register();
  }
}

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);
