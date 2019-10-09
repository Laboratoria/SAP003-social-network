import Register from './pages/register.js';
import uiConfig from '../loginConfig.js';

const init = () => {
  document.querySelector('main').innerHTML = Register();
  uiConfig();
}

window.addEventListener('load', init);
