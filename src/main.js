import logar from './pages/home.js';
import cadastrar from './pages/cadastro.js';

function init() {
  document.querySelector('main').innerHTML = cadastrar();
  document.querySelector('main').innerHTML = logar();
}

window.addEventListener('load', init);
