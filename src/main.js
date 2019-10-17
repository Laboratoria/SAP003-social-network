import Login from './pages/login.js';
import Register from './pages/register.js';
import Button from '../components/button.js';
import Feed from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Login();
}

window.addEventListener('load', init);

const pages = {
  login: Login(),
  register: Register(),  
  feed: Feed(),
};
window.addEventListener('hashchange', () => {
  document.querySelector('main').innerHTML = pages[location.hash.substring(1)];
},false);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANqYMYjH5L6AIG9_Vqkq_cwwHj3nhpZjg",
  authDomain: "rede-social-fake.firebaseapp.com",
  databaseURL: "https://rede-social-fake.firebaseio.com",
  projectId: "rede-social-fake",
  storageBucket: "rede-social-fake.appspot.com",
  messagingSenderId: "752269784715",
  appId: "1:752269784715:web:ce0003abf7c7e754cd068e",
  measurementId: "G-72B9LZ4VES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

