import login from './pages/login.js';
import timeline from './pages/timeline.js';

const locationHashChanged = () => {
  const hash = window.location.hash;
  // const user = firebase.auth().currentUser;
  if (hash === '#timeline') {
    const postsCollection = firebase.firestore().collection('posts');
    postsCollection.orderBy('addedAt', 'desc')
      // .where('userId', '==', user.uid)
      .onSnapshot((snap) => {
        document.querySelector('main').innerHTML = timeline({ posts: snap });
      });
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  }
};

const init = (user) => {
  if (!user) {
    window.location = '#login';
    locationHashChanged();
  } else {
    window.location = '#timeline';
    locationHashChanged();
  }
};

firebase.auth().onAuthStateChanged(init);
window.addEventListener('hashchange', locationHashChanged, false);
