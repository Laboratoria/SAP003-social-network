import Login from './pages/home.js';
import Cadastro from './pages/cadastro.js';
import Feed from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

const pages = {
  home: Login(),
  cadastro: Cadastro(),
  feed: Feed(),
};

window.addEventListener('hashchange', () => {
  // eslint-disable-next-line no-restricted-globals
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
}, false);
