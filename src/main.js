import Register from './pages/register.js';
import Login from "./pages/login.js"

const init = () => {
  location.hash = "";
  document.querySelector('main').innerHTML = Login();
}

const routes = () =>{
  if(location.hash === '#register'){
    document.querySelector('main').innerHTML = Register();
  } else if (location.hash === "") {
    document.querySelector('main').innerHTML = Login();
  }
}

// import { initRouter } from "./route.js";
// import { observer } from "./assets/js/auth.js";

// const init = () => {
//   firebase.auth().onAuthStateChanged(e => initRouter());
// };
window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);
