import Input from '../components/input.js';
import Button from '../components/button.js';
import PostCard from '../components/postcard.js';
import Icons from '../components/icons.js';
import Menu from '../components/menu.js';

function loadPost() {
  const email = firebase.auth().currentUser.email;
  const codUid = firebase.auth().getUid(email);
  firebase.firestore().collection('Posts').where("user", "==", codUid).orderBy("data", "desc").onSnapshot(
    (snap) => {
      snap.forEach((doc) => {
        templatePosts({ 
          dataId: doc.id,
          like: doc.data().likes,
          name: doc.data().name, 
          post: doc.data().post, 
          time: doc.data().data.toDate().toLocaleString("pt-BR") });
      });
    });
}

function templatePosts(props) {
  const timeline = document.getElementById("history");
  timeline.innerHTML += `<div id=${props.dataId} class='post-box'> 
    ${Icons({id:props.dataId, class:'delete', title:'x',onClick: deletePost,})}
    ${PostCard(props)} 
    ${Icons({id:props.dataId, class:'like', title:`likes ${props.like}`,onClick: likePost,})}
    ${Icons({id:props.dataId, class:'edit',title:'edit',onClick: editPost,})}
    ${Icons({id:props.dataId, class:'save',title:'save',onClick: savePost,})}
    </div>`
    document.getElementById(props.dataId).querySelector('.primary-icon-save').style.display = 'none';
}

function Post() {
  location.hash = 'post'
  const template = `
  <div class="box-post">
  <header class="header"><img src="./Imagens/header-logo.png"></header>
  <input type="checkbox" id="btn-menu"/>
  <label for="btn-menu">&#9776;</label>
  <nav class="menu">
  <ul>
  ${Menu({
    name: 'Perfil',
    link: pagePerfil,
  })}
  ${Menu({
    name: 'Sair',
    link: logOut,
  })}
  </ul> 
  </nav>
  <div class="description">
    <img class = "avatar" src="./Imagens/avatar.png">
    <p class = "name-display">${firebase.auth().currentUser.displayName}</p>
    <p class='post-job'>${firebase.firestore().collection('users').doc(firebase.auth().getUid(firebase.auth().currentUser.email)).get().then(function(doc) {document.querySelector('.post-job').textContent = doc.data().job})}</p>;
  </div>
  <form class="primary-box">
    ${Input({
    class: 'js-post',
    placeholder: 'O que quer compartilhar?',
    value:'',
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

function deletePost(event) {
  const idPost = event.target.id;
  firebase.firestore().collection('Posts').doc(idPost).delete();
  event.target.parentElement.remove();
}

function likePost(event) {
  const idPost = event.target.id;
  let y = Number(document.getElementById(idPost).getElementsByClassName('primary-icon-like')[0].textContent.replace('likes ',''));
  y++
  firebase.firestore().collection('Posts').doc(idPost).update({
    likes: y,
  }).then(()=>{
    //location.reload()
  }) 
}

function editPost(event) {
  const idPost = event.target.id;
  const select = document.getElementById(idPost).getElementsByClassName('card-post')[0];
  select.setAttribute('contentEditable', 'true')
  document.getElementById(idPost).querySelector('.primary-icon-save').style.display = 'inline';
}


function savePost(event) {
  const idPost = event.target.id;
  const newtext = document.getElementById(idPost).getElementsByClassName('card-post')[0].innerHTML;
  firebase.firestore().collection('Posts').doc(idPost).update(
    {post: newtext}
  );
  document.getElementById(idPost).querySelector('.primary-icon-save').style.display = 'none';
}

function pagePerfil(){
  window.location.hash='perfil'
};

function logOut(){
  firebase.auth().signOut();
};


window.post = {
  deletePost,
  editPost,
  savePost,
}

export default Post;
