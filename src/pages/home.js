import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Card from '../components/card.js';

function addPost(post, postId) {
  const postTemplate = `
<li id='${postId}' class='post-li'>
${post.timestamp.toDate().toLocaleString('pt-BR')}: </br >
${post.text} </br >
🏆 ${post.likes}
</li>`;
  return postTemplate;
}

function loadPost() {
  const postColletion = firebase
    .firestore()
    .collection('posts')
    .where('user', '==', window.user.uid);
  const postList = document.querySelector('.post-ul');
  postColletion.get().then((snap) => {
    postList.innerHTML = '';
    snap.forEach((post) => {
      postList.innerHTML += addPost(post.data(), post.id);
    });
  });
}

function publish() {
  const textArea = document.querySelector('.post');
  const fieldValue = firebase.firestore.FieldValue;
  const id = firebase.auth().currentUser.uid;
  const post = {
    user: id,
    text: textArea.value,
    likes: 0,
    coments: [],
    timestamp: fieldValue.serverTimestamp()
  };
  const postColletion = firebase.firestore().collection('posts');
  postColletion.add(post).then((res) => {
    textArea.value = '';
    loadPost();
    postColletion.get();
  });
}

function feed() {
  const template = `
<<<<<<< HEAD
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
=======
<img src="../../imagens/logo.png"></img class="image-logo">
${Textarea({ id: 'post', class: 'post' })}
${Button({ id: 'publish', title: 'Publish', call: publish })}
<div class ='post-public'>
<ul class='post-ul'>
</ul>
</div>
`;
>>>>>>> 30d1fd3b21697203e9c67b5e994bcd10b9b002dc

  return template;
}
export default feed;

window.loadPost = loadPost;
