import Login from './pages/home.js';
import Cadastro from './pages/cadastro.js';
import Feed from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

const pages = {
  home: Login(),
  cadastro: Cadastro(),
  feed: Feed(),
};

window.addEventListener('hashchange', () => {
  // eslint-disable-next-line no-restricted-globals
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
}, false);

const firebaseConfig = {
  apiKey: "AIzaSyCK9mYILI8AUY8ZrwEYeS24eRjuToRY1bM",
  authDomain: "rede-social-b4317.firebaseapp.com",
  databaseURL: "https://rede-social-b4317.firebaseio.com",
  projectId: "rede-social-b4317",
  storageBucket: "",
  messagingSenderId: "692267998745",
  appId: "1:692267998745:web:67ae94498089ad977c9488",
  measurementId: "G-812STV8Y8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

