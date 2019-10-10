import Register from './pages/register.js';
import Login from "./pages/login.js"
const init = () => {
  document.querySelector('main').innerHTML = Login();
  // uiConfig();
}

window.addEventListener('load', init);

// import { initRouter } from "./route.js";
// import { observer } from "./assets/js/auth.js";

// const init = () => {
//   firebase.auth().onAuthStateChanged(e => initRouter());
// };
