import login from './pages/login.js';
import timeline from './pages/timeline.js';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location = '#timeline';
  } else {
    window.location = '#login';
  }
});

const locationHashChanged = () => {
  const hash = window.location.hash;

  if (hash === '#timeline') {
    const postsCollection = firebase.firestore().collection('posts');
    postsCollection.orderBy('addedAt', 'desc').onSnapshot((snap) => {
      document.querySelector('main').innerHTML = timeline({ posts: snap });
    });
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  }
};

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);
