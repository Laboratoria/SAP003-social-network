import login from './pages/login.js';
import timeline from './pages/timeline.js';
import profile from './pages/profile.js';

const locationHashChanged = () => {
  const hash = window.location.hash;
  if (hash === '#timeline') {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((userSnap) => {
        const postsCollection = firebase.firestore().collection('posts');
        postsCollection.orderBy('addedAt', 'desc')
          .onSnapshot((snap) => {
            document.querySelector('main').innerHTML = timeline({ posts: snap, user: userSnap.data() });
          });
      });
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  } else if (hash === '#profile') {
    const userCollection = firebase.firestore().collection('users');
    userCollection
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snap) => {
        document.querySelector('main').innerHTML = profile({ user: snap.data() });
      });
  }
};

const init = (user) => {
  if (!user) {
    window.location = '#login';
    locationHashChanged();
  } else if (user == login()) {
    window.location = '#timeline';
    locationHashChanged();
  } else {
    window.location = '#profile';
    locationHashChanged();
  }
};

firebase.auth().onAuthStateChanged(init);
window.addEventListener('hashchange', locationHashChanged, false);
