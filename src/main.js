import Home from './pages/home.js';
import register from './pages/register.js';
import feed from './pages/feed.js'

function init() {
  document.querySelector('main').innerHTML = Home();

}

window.addEventListener('load', init);

function locationHashChanged() {
  if(location.hash === '#register') {
    // return registrar()
    document.querySelector('main').innerHTML= register();
  } else if (location.hash === '#home') {
    document.querySelector('main').innerHTML= Home();
  }else if (location.hash === '#feed') {
    document.querySelector('main').innerHTML= feed()
  }
}
window.addEventListener('hashchange', locationHashChanged, false);
