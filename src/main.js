import Home from './pages/home.js';
import Login from './pages/login.js';

function router() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (window.location.hash === '#home') {
        firebase.firestore().collection('posts')
          .where('user', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            document.querySelector('main').innerHTML = Home({
              posts: querySnapshot,
            });
          });
      }
    } else {
      window.location.hash = '#login';
      document.querySelector('main').innerHTML = Login();
    }
  });

}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
