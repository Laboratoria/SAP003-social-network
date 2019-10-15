import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import { loadFeed } from '../components/postsContainer.js';
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
  return `
  <p class="text">Essa é a home!</p>
  ${loadFeed()}
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
  `;
}

window.home = {
  logOut,
  Post,
  loadFeed,
  createNewPost,
};

export default Home;
