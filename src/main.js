import Login from './pages/login.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

const firebaseConfig = {
  apiKey: "AIzaSyCd7cl5bTaNjihZaOyywCmKI2wMJTpACtc",
  authDomain: "heroinassquad2.firebaseapp.com",
  databaseURL: "https://heroinassquad2.firebaseio.com",
  projectId: "heroinassquad2",
  storageBucket: "heroinassquad2.appspot.com",
  messagingSenderId: "459262868374",
  appId: "1:459262868374:web:6e00aa195a92de75d17bb7"
};

firebase.initializeApp(firebaseConfig);
