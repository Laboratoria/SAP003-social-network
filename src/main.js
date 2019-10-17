import Register from './pages/register.js';
import Login from './pages/login.js';
import Feed from './pages/feed.js';

const main = document.querySelector('main');

const authCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.hash = '#feed';

      firebase.firestore().collection('posts')
          .orderBy('timestamp', 'desc')
          .get()
          .then((querySnapshot) => {
            main.innerHTML = Feed({posts: querySnapshot });

          });
    } else {
      location.hash = '';
    }
  });
};

const routes = () => {
  if (location.hash === '#register') {
    main.innerHTML = Register();
  } else if (location.hash === '') {
    main.innerHTML = Login();
  } else if (location.hash === '#feed') {
    authCheck();
  }
};


window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);
