import Login from './pages/login.js';
import uiConfig from '../loginConfig.js';

function init() {
  document.querySelector('main').innerHTML = Login();
  uiConfig();
}

window.addEventListener('load', init);
