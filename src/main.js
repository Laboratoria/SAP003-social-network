import Home from './pages/home.js';
import Cadastro from './pages/cadastro.js';

function init() {
  document.querySelector('main').innerHTML = Cadastro();
  document.querySelector('section').innerHTML = Home();
}

window.addEventListener('load', init);
