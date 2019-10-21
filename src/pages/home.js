import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import { loadFeed, Feed } from '../components/feed.js';
import Post from '../components/post.js';

function logOut() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#login';
  }).catch((error) => {
    document.getElementById('error').innerText = `${error.code} ${error.message} - Ocorreu um erro no logout.`;
  });
}

function createNewPost() {
  const content = document.querySelector('#postText');
  const user = firebase.auth().currentUser;
  const feed = document.querySelector('#feed');
  const post = {
    text: content.value,
    likes: 0,
    comments: [],
    user_name: user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };
  firebase.firestore().collection('post').add(post).then(() => {
    feed.innerHTML = '';
    content.value = '';
    window.home.loadFeed();
  });
}

function Home() {
  window.location.href = '#home';

  const template = `
  ${Button({
    class: 'primary-button primary-font',
    onClick: window.home.logOut,
    title: 'Log out',
  })}
  
  <form>
  ${Textarea({
    id: 'postText',
    class: 'post-textbox secondary-font',
    placeholder: 'O que você está pensando agora?',
  })}
  
  ${Button({
    class: 'primary-button primary-font',
    onClick: window.home.createNewPost,
    title: 'Post!',
  })}
  </form>

  ${Feed()}
  `;

  return template;
}

window.home = {
  logOut,
  Post,
  loadFeed,
  createNewPost,
};

export default Home;
