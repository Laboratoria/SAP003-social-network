import logar from './pages/home.js';
import cadastrar from './pages/cadastro.js';
import feed from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = logar();
}

window.addEventListener('load', init);

function locationHashChanged() {
  switch (window.location.hash) {
    case '#cadastrar':
      document.querySelector('main').innerHTML = cadastrar();
      break;
    case '#home':
      document.querySelector('main').innerHTML = logar();
      /*  salvar(); */
      break;
    case '#feed':
      document.querySelector('main').innerHTML = feed();
<<<<<<< HEAD
=======
      window.postarPublicacao();
      // carregarPosts();
      salvar();
>>>>>>> e28550ea3c6295e440c218220998ba5d08a45eac
      break;
    default:
      document.querySelector('main').innerHTML = logar();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);
