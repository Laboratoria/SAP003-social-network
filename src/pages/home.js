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

function printPosts() {
  const feed = document.querySelector('#feed');
  const posts = firebase.firestore().collections('post');

  posts.get().then((postsList) => {
    postsList.forEach((post) => {
      const allPosts = window.home.Post({
        id: post.id,
        username: post.user_id,
        date: post.timestamp,
        text: post.text,
      });
      feed.innerHTML = allPosts;
    });
  });
}

function createNewPost() {

  const content = document.querySelector('#postText');
  const user = firebase.auth().currentUser;
  const post = {
    text: content.value,
    likes: 0,
    comments: [],
    user_id: user.uid,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };
  firebase.firestore().collection('post').add(post)
  // .then(() => {
  //   content.value = '';
  //   printPosts();
  // });
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
  printPosts,
  Post,
  createNewPost,
};

export default Home;
