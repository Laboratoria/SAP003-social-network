import Register from './pages/register.js';
import Login from "./pages/login.js"
import Home from "./pages/home.js"

const routes = () => {
  if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  } else if (location.hash === "") {
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === "#home") {
    document.querySelector('main').innerHTML = Home();
  }
}

// const init = () => {
//   firebase.auth().onAuthStateChanged(e => initRouter());
// };
window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);
