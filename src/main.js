import Home from './pages/home.js';
import Register from './pages/register.js';
import Database from './pages/database.js';


function pageRoute() {
  const pageName = (window.location.hash) ? window.location.hash : '#home';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      switch (pageName) {
        case '#home':
          document.querySelector('main').innerHTML = Home();
          break;
        case '#register':
          document.querySelector('main').innerHTML = Register();
          break;
        case '#database':
          firebase.firestore().collection('feed').get()
            .then((querySnapshot) => {
              document.querySelector('main').innerHTML = Database({
                feed: querySnapshot,
              });
            });
          break;
        default:
          document.querySelector('main').innerHTML = Home();
      }
    } else {
      switch (pageName) {
        case '#home':
          document.querySelector('main').innerHTML = Home();
          break;
        case '#register':
          document.querySelector('main').innerHTML = Register();
          break;
        default:
          document.querySelector('main').innerHTML = Home();
      }
    }
  })
}

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);