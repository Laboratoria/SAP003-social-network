import Home from './pages/home.js';
import Register from './pages/register.js';
import Login from './pages/login.js';
import Feed from './pages/feed.js';

const pages = {
  home: Home(),
  register: Register(),
  login: Login(),
  feed: Feed(),
};

function init() {
  document.querySelector('main').innerHTML = Login();
}
window.addEventListener('load', init);

window.addEventListener('hashchange', () => {
  // const pageHash = location.hash.substring(1);
  // console.log(pageHash);
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
}, false); 
