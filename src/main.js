import Login from './pages/login.js';
import Register from './pages/register.js';
import Feed from './pages/feed.js';

function pagesChange() {
  document.querySelector('main').innerHTML = Login();
  if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
    //document.getElementByTagName("body")[0].className = "banana"
  } else if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
    //document.getElementByTagName("body")[0].className = "peixinho"
  } else if (location.hash === '#feed') {
    const collectionPost = firebase.firestore().collection('posts')
    collectionPost.get().then(snap => {
      document.querySelector('main').innerHTML = Feed({posts: snap});
    });



    
    //document.getElementByTagName("body")[0].className = "xuxu"
  }
};

window.addEventListener('hashchange', pagesChange);
window.addEventListener('load', pagesChange);
