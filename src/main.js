import Login from './pages/login.js';
import Register from './pages/register.js';
import Post from './pages/post.js';

const pages = {
  login: Login(),
  register: Register(),
  post: Post(),
}

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

window.addEventListener('hashchange', () => {
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
}, false);
