import Home from './pages/home.js';
import Login from './pages/login.js';

function router() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (window.location.hash === '#home') {
        const posts = [];
        firebase.firestore().collection('posts')
          .where('user', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const post = { ...doc.data(), id: doc.id, comments: [] };
              doc.ref.collection('comments').get()
                .then((querySnapshot2) => {
                  querySnapshot2.forEach((doc2) => {
                    const comment = doc2.data();
                    if (comment) {
                      post.comments.push(comment);
                    }
                  });
                  posts.push(post);
                })
                .then(() => {
                  document.querySelector('main').innerHTML = Home({
                    posts,
                  });
                });
            });
            return posts;
          });

      } else {
        window.location.hash = '#login';
        document.querySelector('main').innerHTML = Login();
      }
    } else {
      window.location.hash = '#login';
      document.querySelector('main').innerHTML = Login();
    }
  });
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
