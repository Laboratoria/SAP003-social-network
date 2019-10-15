import Post from './post.js'

function printPosts(post) {
  const feed = document.querySelector('#feed');
  const template = window.post.Post({
    id: post.id,
    username: post.data().user_name,
    date: post.data().timestamp.toDate().toLocaleString(),
    text: post.data().text,
  });
  feed.innerHTML += template;
}

function loadFeed() {
  const postCollection = firebase.firestore().collection('post');
  const feed = document.querySelector('#feed');

  feed.innerText = 'Carregando...';
  postCollection.orderBy('timestamp').get().then((snap) => {
    feed.innerText = '';
    snap.forEach(post => window.post.printPosts(post));
  });
}

window.post = {
  printPosts,
  loadFeed,
  Post,
}

export { loadFeed, printPosts };
