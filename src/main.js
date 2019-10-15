// import logar from './pages/home.js';
// import cadastrar from './pages/cadastro.js';
import postar from './pages/feed.js';

function init() {
  // document.querySelector('main').innerHTML = cadastrar();
  // document.querySelector('main').innerHTML = logar();
  document.querySelector('main').innerHTML = postar();
}

window.addEventListener('load', init);
