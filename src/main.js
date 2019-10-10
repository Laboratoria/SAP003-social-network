// import Home from './pages/home';
import TemplateLogin from './pages/login.js';
import newUserTemplate from "./pages/createAccount.js";
// import Feed from "./pages/home.js";

function init() {
  document.querySelector("main").innerHTML = newUserTemplate();
}

function initLogin() {
document.querySelector("main").innerHTML = TemplateLogin();
}

// function initFeed() {
//   document.querySelector("main").innerHTML = Feed();
// }

window.addEventListener("load", init);
window.addEventListener("load", initLogin);
