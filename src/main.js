import Home from './pages/home.js';
import Postpage from './pages/postpage.js'


function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#home';
  switch (pageName) {
    case '#home':
      document.querySelector('main').innerHTML = Home();
      break;
    default:
      document.querySelector('main').innerHTML = Postpage();

  }
}


window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);

