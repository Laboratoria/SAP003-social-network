import Login from './pages/home.js';
import Cadastro from './pages/cadastro.js';

function init() {
  document.querySelector('main').innerHTML = Cadastro();
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);
