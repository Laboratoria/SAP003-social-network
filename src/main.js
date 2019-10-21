import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Feed from './pages/feed.js';
import Profile from './pages/profile.js';
window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);

function locationHashChanged(){
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      if (location.hash ==='#feed') {
        document.querySelector('main').innerHTML = Feed();
      } else if (location.hash === '#login' || location.hash === '') {
        document.querySelector('main').innerHTML = Login();
      } else if (location.hash ==='#signup'){
        document.querySelector('main').innerHTML = Signup();
      } else if (location.hash === '#profile'){
        firebase.firestore().collection('posts')
        .where('user_id', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          document.querySelector('main').innerHTML = Profile({
            posts: querySnapshot,
          });
        });
        
      }
    } else {
      if (location.hash === '#login' || location.hash === '') {
        document.querySelector('main').innerHTML = Login();
      } else if(location.hash === '#signup'){
        document.querySelector('main').innerHTML = Signup();
      }
    }
  });
}
//#login página de login
//#signup href do "cadastre-se"
//#feed página do feed
//Logout(), função que faz logout
//Login()função que tem a tela do login
//Signup() função da tela de cadastro
//Signout()função do botão signout