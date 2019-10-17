import TemplateLogin from './pages/login.js';
import feed from './pages/home.js';
import newUserTemplate from './pages/createAccount.js';

function init() {
  document.querySelector('main').innerHTML = TemplateLogin();
}

function locationHasChange() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (location.hash === '#feed') {
        firebase
          .firestore()
          .collection('posts')
          .where('user', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            document.querySelector('main').innerHTML = feed({
              posts: querySnapshot,
            });
          });
      }
    } else {
      (location.hash === '#login');
      document.querySelector('main').innerHTML = TemplateLogin();
    }

    if (location.hash === '#createAccount') {
      document.querySelector('main').innerHTML = newUserTemplate();
    }
  });
}

window.addEventListener('hashchange', locationHasChange, false);

window.addEventListener('load', init);
