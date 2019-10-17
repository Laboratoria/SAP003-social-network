import Login from './pages/login.js';
import Feed from './pages/feed.js';
import Perfil from './pages/perfil.js';
import Register from './pages/register.js';


window.addEventListener('load', locationHashChanged);


function locationHashChanged() {
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {   
  if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  } else if (location.hash === '#feed') {
    firebase.firestore().collection('posts')
    .where('user', '==', user.uid)
    .get()
    .then((querySnapshot) => {
    document.querySelector('main').innerHTML = Feed({
      posts: querySnapshot,
    })
    })  
  }   
  } else if (location.hash === '#perfil') {
    document.querySelector('main').innerHTML = Perfil();
  } else if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  } else {
    document.querySelector('main').innerHTML = Login();
  }
}
  )}

window.onhashchange = locationHashChanged;
