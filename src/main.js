import  Home from './pages/home.js';
import Register from './pages/register.js';
import { Database, Post, Feed } from './pages/database.js';

function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#home';
  switch (pageName) {
    case '#home':
      document.querySelector('main').innerHTML = Home();
      break;
    case '#register':
      document.querySelector('main').innerHTML = Register();
      break;
    case '#database':
      document.querySelector('main').innerHTML = Database();
      break;
    default:
      document.querySelector('main').innerHTML = Home();
  }
}

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);