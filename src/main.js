import login from './pages/login.js';
import register from './pages/register.js';
import home from './pages/home.js';
import feed from './pages/feed.js';


function init() {
  document.querySelector('main').innerHTML = login();
  console.log(location)
}

window.addEventListener('load', init);


function locationHashChanged() {
  switch (location.hash) {
    case '#register.js':
    document.querySelector('main').innerHTML = register();
    break;
    case '#home.js':
    document.querySelector('main').innerHTML = home();
    break;
    case '#login.js':
    document.querySelector('main').innerHTML = login();
    break;
    case '#feed.js':
    document.querySelector('main').innerHTML = feed();
    break;       
  }
  
}

window.addEventListener("hashchange", locationHashChanged, false);
