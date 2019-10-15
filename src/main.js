import Home from './pages/home.js';
import register from './pages/register.js';
import timeline from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Home();
 
} 

window.addEventListener('load', init);


function locationHashChanged() {
  if(location.hash==='#register') {
    document.querySelector('main').innerHTML= register();
  } else if (location.hash==='#home') {
    document.querySelector('main').innerHTML= Home();
  } else if (location.hash==='#feed') {
    document.querySelector('main').innerHTML= timeline();
  } 
}
window.addEventListener('hashchange', locationHashChanged, false);