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
    case '#item-1':
        document.querySelector('main').innerHTML = cadastrar();
        salvar();
        break;
    case '#item-2':
        document.querySelector('main').innerHTML = cadastrar();
        salvar();
        break;
    case '#item-3':
        document.querySelector('main').innerHTML = cadastrar();
        salvar();
        break;
    case '#item-4':
          document.querySelector('main').innerHTML = cadastrar();
          salvar();
          break;
    case '#item-5':
          document.querySelector('main').innerHTML = cadastrar();
          salvar();
          break;
    case '#home':
      document.querySelector('main').innerHTML = logar();
      break;
    case '#feed':
      document.querySelector('main').innerHTML = feed();
      window.postarPublicacao();
      // carregarPosts();
      break;

      salvar();

    default:
      document.querySelector('main').innerHTML = logar();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);
