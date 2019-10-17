import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Card from '../components/card.js';

function addPost(post) {
  const postTemplate = `
  <li class='post-li'>
  ${post.timestamp.toDate().toLocaleString('pt-BR')}: </br >
  ${post.text} </br >
  🏆 ${post.likes}
    </li>`;
  return postTemplate;
}

function loadPost() {
  const postColletion = firebase.firestore().collection('posts');
  const postList = document.querySelector('.post-ul');
  postColletion.get().then((snap) => {
    postList.innerHTML = '';
    snap.forEach((post) => {
      postList.innerHTML += addPost(post.data());
    });
  });
}

function publish() {
  const textArea = document.querySelector('.post');
  const fieldValue = firebase.firestore.FieldValue;
  const post = {
    text: textArea.value,
    user_id: 'cat',
    likes: 0,
    coments: [],
    timestamp: fieldValue.serverTimestamp(),
  };

  const postColletion = firebase.firestore().collection('posts');
  postColletion.add(post).then((res) => {
    textArea.value = '';
    loadPost();
    postColletion.get();
  });
}

var userCollection = db.collection('users').doc('user.uid');
console.log(userCollection);

function feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    <p>Bem vinda!</p>
    <p>O que você deseja postar agora...</p>
    ${Textarea({ id: 'post', class: 'post' })}
    ${Button({ id: 'publish', title: 'Publish', call: publish })}
    <div class ='post-public'>
    <ul class='post-ul'>
    </ul>
    </div>
     `;

  return template;
}
export default feed;

window.loadPost = loadPost;
