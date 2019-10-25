import logar from './pages/home.js';
import cadastrar from './pages/cadastro.js';
import feed from './pages/feed.js';

function locationHashChanged() {
  const paginas = (window.location.hash) ? window.location.hash : '#home';
  switch (paginas) {
    case '#cadastrar':
      document.querySelector('main').innerHTML = cadastrar();
      break;
    case '#home':
      document.querySelector('main').innerHTML = logar();
      break;
    case '#feed':
      document.querySelector('main').innerHTML = feed();
      window.addEventListener('load', feed());
      window.mostrarPublicacao();
      break;
    default:
      document.querySelector('main').innerHTML = logar();
  }
}

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);
