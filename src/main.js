import Register from './pages/register.js';
import Login from './pages/login.js';
import Feed from './pages/feed.js';

const main = document.querySelector('main');

const authCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.hash = '#feed';
      main.innerHTML = Feed();
    } else {
      location.hash = '';
    }
  });
};

// const teste = () => {
//   firebase.firestore().collection('posts').get().then((snap) => {
//     snap.docs.forEach(doc => console.log(doc.id));
//   });
// };

const routes = () => {
  if (location.hash === '#register') {
    main.innerHTML = Register();
  } else if (location.hash === '') {
    main.innerHTML = Login();
  } else if (location.hash === '#feed') {
    authCheck();
  }
};

// window.onload = teste;

window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);
