import Register from './pages/register.js';
// import uiConfig from '../loginConfig.js';

function init() {
  document.querySelector('main').innerHTML = Register();
  // uiConfig();
}

window.addEventListener('load', init);
