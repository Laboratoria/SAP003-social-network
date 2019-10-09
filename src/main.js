// window.addEventListener("hashchange", Home);
import Home from './pages/home.js';
import Register from './pages/register.js';
import Login from './pages/login.js';
import Feed from './pages/feed.js';

const pages = {
  home: Home(),
  register: Register(),
  login: Login(),
  feed: Feed()
};

function init() {
  document.querySelector('main').innerHTML = Login();
}
window.addEventListener('load', init);

window.addEventListener('hashchange', function () {
  const pageHash = location.hash.substring(1);
  document.querySelector('main').innerHTML = pages[pageHash];
}, false);

// import Register from './pages/register.js';

// function init() {
//   document.querySelector('main').innerHTML = Register();
// }
// window.addEventListener('load', init);


// import Login from './pages/login.js';

// function init() {
//   document.querySelector('main').innerHTML = Login();
// }
// window.addEventListener('load', init);