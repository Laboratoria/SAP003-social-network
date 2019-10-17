import Input from '../components/input.js';
import Button from '../components/button.js';
import PostCard from '../components/postcard.js';

function loadPost() {
  const email = firebase.auth().currentUser.emailVerified;
  const codUid = firebase.auth().getUid(email);
  /* const name = firebase.auth().currentUser.displayName; */
  firebase.firestore().collection('Posts').where("user", "==", codUid).orderBy("data", "desc").get().then(
    (snap) => {
      snap.forEach((doc) => {
        templatePosts({ name: doc.data().name, post: doc.data().post, time: doc.data().data.toDate().toLocaleString("pt-BR") });
      });
    });
}

function templatePosts(props) {
  const xuxu = document.getElementById("history")
  xuxu.innerHTML += PostCard(props)
}

function Post() {
  location.hash = 'post'
  const template = `
  <div class="box">
  <header class="header"><img src="./Imagens/header-logo.png"></header>
  <nav>
  <ul>
    <li><a href="#">Feed</a></li>
    <li><a href="#">Perfil</a></li>
    <li><a href="#">Sair</a></li>
    </ul>
  </nav>
  <div class="description">
    <img class = "avatar" src="./Imagens/avatar.png">
    <p class = "name-display">${firebase.auth().currentUser.displayName}</p>
  </div>
  <form class="primary-box">
    ${Input({
    class: 'js-post',
    placeholder: 'O que quer compartilhar?',
    type: 'text',
  })}
    ${Button({
    id: 'share',
    title: 'Compartilhar',
    onClick: SharePost,
  })}
  </form>
  <ul id="history">
  </ul>
  </div>`;
  loadPost();
  return template;
}

function SharePost() {
  const postText = document.querySelector('.js-post');
  const email = firebase.auth().currentUser.emailVerified
  const codUid = firebase.auth().getUid(email);
  const time = firebase.firestore.FieldValue.serverTimestamp();
  const name = firebase.auth().currentUser.displayName;
  firebase.firestore().collection('Posts').add({
    name: name,
    user: codUid,
    data: time,
    likes: 0,
    post: postText.value,
    comments: []
  }).then(function () {
    location.reload()
    loadPost();
  })
  document.querySelector('.js-post').value = '';
}

export default Post;
