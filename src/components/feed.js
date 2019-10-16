import Post from './post.js';

function printPosts(post) {
  const feed = document.querySelector('#feed');
  const template = window.feed.Post({
    id: post.id,
    username: post.data().user_name,
    date: post.data().timestamp.toDate().toLocaleString(),
    text: post.data().text,
  });
  feed.innerHTML += template;
}

function loadFeed() {
  const postCollection = firebase.firestore().collection('post');
  postCollection.orderBy('timestamp', 'desc').get().then((snap) => {
    snap.forEach(post => window.feed.printPosts(post));
  });
  return '';
}

function Feed() {
  return `
  <div id="feed" class ="feed">${window.feed.loadFeed()}</div>
  `;
}

window.feed = {
  printPosts,
  loadFeed,
  Post,
  Feed,
};

export { loadFeed, Feed };
