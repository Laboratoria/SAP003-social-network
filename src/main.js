import Login from './pages/login.js';
import Register from './pages/register.js';
import Post from './pages/post.js';
import Update from './pages/update.js'

var firebaseConfig = {
  apiKey: "AIzaSyCd7cl5bTaNjihZaOyywCmKI2wMJTpACtc",
  authDomain: "heroinassquad2.firebaseapp.com",
  databaseURL: "https://heroinassquad2.firebaseio.com",
  projectId: "heroinassquad2",
  storageBucket: "heroinassquad2.appspot.com",
  messagingSenderId: "459262868374",
  appId: "1:459262868374:web:6e00aa195a92de75d17bb7"
};
firebase.initializeApp(firebaseConfig);

window.addEventListener('load', acesspages);

function acesspages () {
  firebase.auth().onAuthStateChanged(function (user) {
  switch (location.hash) {
    case "#register":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Register();
    break;
    case "#login":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Login();
    break;
    case "#update":
      user ? window.location = "#post" : document.querySelector('main').innerHTML = Update();
    break;
    case "#post" :
      user ? document.querySelector('main').innerHTML = Post() : window.location = "#login";
    break
    default:
      window.location = "#login";
  }})
}

window.addEventListener('hashchange', acesspages, false);
window.addEventListener('load', acesspages);
