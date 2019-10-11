import {Database, Post} from './pages/database.js';

function init() {
  document.querySelector('main').innerHTML = Database();
  document.querySelector('main').innerHTML += Post();
  
}

window.addEventListener('load', init);
 
