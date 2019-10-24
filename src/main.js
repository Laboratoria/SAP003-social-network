import Login from './pages/login.js';
import Feed from './pages/feed.js';
import Register from './pages/register.js';
import Profile from './pages/profile.js';

function locationHashChanged() {
  const dataBase = firebase.firestore();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (window.location.hash === '#feed') {
        dataBase.collection('posts')
          .where('user', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            document.querySelector('main').innerHTML = Feed({
              posts: querySnapshot,
            });
          });
     } else if (window.location.hash === '#profile') {
        document.querySelector('main').innerHTML = Profile();
      } 
    } 
       else if (window.location.hash === '#register') {
         
        document.querySelector('main').innerHTML = Register();
      } else {
        document.querySelector('main').innerHTML = Login();
      }
});
}

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged);
