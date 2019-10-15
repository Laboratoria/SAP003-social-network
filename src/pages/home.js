import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import PostsContainer from '../components/postsContainer.js';
import Post from '../components/post.js';

function logOut() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#login';
  }).catch((error) => {
    document.getElementById('error').innerText = `${error.code} ${error.message} - Ocorreu um erro no logout.`;
  });
}

function printPosts(post) {
  const feed = document.querySelector('#feed');
  const template = window.home.Post({
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
    snap.forEach(post => window.home.printPosts(post));
  });
}

function createNewPost() {
  const content = document.querySelector('#postText');
  const user = firebase.auth().currentUser;
  const post = {
    text: content.value,
    likes: 0,
    comments: [],
    user_name: user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };
  firebase.firestore().collection('post').add(post).then(() => {
    content.innerText = '';
    window.home.loadFeed();
  });
}

function Home() {
  return `<p class="text">Essa é a home!</p>
  ${Button({
    class: 'primary-button',
    onClick: window.home.logOut,
    title: 'Log out',
  })}

  <p id="error"></p>
  
  ${Textarea({
    id: 'postText',
    class: 'primary-textarea',
    placeholder: 'O que você está pensando agora?',
  })}
  
  ${Button({
    class: 'primary-button',
    onClick: window.home.createNewPost,
    title: 'Post!',
  })}

  ${PostsContainer({
    content: '',
  })}`;
}

window.home = {
  logOut,
  Post,
  printPosts,
  createNewPost,
  loadFeed,
};

export default Home;
