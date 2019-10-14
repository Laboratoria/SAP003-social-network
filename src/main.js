import Register from './pages/register.js';
import Login from "./pages/login.js"
import Feed from "./pages/feed.js"

const routes = () => {
  if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  } else if (location.hash === '') {
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === '#feed') {
    document.querySelector('main').innerHTML = Feed();
  }
}

window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);
