import login from './pages/login.js';
import timeline from './pages/timeline.js';
import profile from './pages/profile.js';

const locationHashChanged = () => {
  const hash = window.location.hash;
  if (hash === '#timeline') {
    const postsCollection = firebase.firestore().collection('posts');
    postsCollection.orderBy('addedAt', 'desc')
      .onSnapshot((snap) => {
        document.querySelector('main').innerHTML = timeline({ posts: snap });
      });
  } else if (hash === '#login') {
    document.querySelector('main').innerHTML = login();
  }  else if (hash === '#profile') {
    const userCollection = firebase.firestore().collection('users');
    userCollection.get().then(snap => {
    document.querySelector('main').innerHTML = profile({ users: snap });
  })
};
}

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
