import Login from './pages/login.js';
import Feed from './pages/feed.js';
import Register from './pages/register.js';

function locationHashChanged() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (window.location.hash === '#feed') {
                firebase.firestore().collection('posts')
                    .where('user_uid', '==', user.uid)
                    .get()
                    .then((querySnapshot) => {
                        document.querySelector('main').innerHTML = Feed({
                            posts: querySnapshot,
                        });
                    });
            } else if (window.location.hash === '#register') {
                document.querySelector('main').innerHTML = Register();
            } else {
                document.querySelector('main').innerHTML = Login();
            }
        } else {
            document.querySelector('main').innerHTML = Login();
        }
    });
}

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged);