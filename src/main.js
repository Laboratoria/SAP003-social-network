import Home from './pages/home.js';
import Cadastro from './pages/cadastro.js';

function init() {
  document.querySelector('main').innerHTML = Cadastro();
}

window.addEventListener('load', init);
