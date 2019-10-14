import Home from './pages/home.js';
import {Database, Post} from './pages/database.js';
import Register from './pages/register.js';


function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#Home';
  switch (pageName) {
    case '#home':
      document.querySelector('main').innerHTML = Home();
      break;
    case '#register':
        document.querySelector('main').innerHTML = Register();
        break;
    case '#postpage':
      document.querySelector('main').innerHTML = Database();
      break;
    default:
      document.querySelector('main').innerHTML = Home();
  }
}

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);

