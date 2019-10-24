import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import { AddComment, PrivacyPost, EditPost, LikePost, DeletePost } from '../posts/functions.js';

function logOut() {
  auth
    .signOut()
    .then(() => {
      window.location = '#login';
    });
}

function userInfo() {
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then((doc) => {
    const username = `
    <h4>Bem vindo(a), ${doc.data().name}!</h4>
    `;
    document.querySelector('.profile').innerHTML = username;
  });
}

function createPost() {

  const text = document.querySelector('.text-area').value;
  //const userdoc =  db.collection('users').doc(auth.currentUser.uid)

  const post = {
    likes: 0,
    user_likes: [],
    text,
    comments: [],
    user_name: auth.currentUser.displayName,
    user_id: auth.currentUser.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    privacy: 'public',
  };

  const postsCollection = db.collection('posts');
  postsCollection
    .add(post)
    .then()
    .catch((error) => {
      console.log('erro', error);
      console.log('Não foi possível criar post.');
    });
  document.querySelector('.text-area').value = '';
}

function NewPostTemplate() {
  const postArea = `
  ${Textarea({
    class: 'text-area',
    id: 'post-text',
    placeholder: 'No que você está pensando?',
    value: '',
  })}
  ${Button({
    type: 'button',
    class: 'btn btn-gray btn-post',
    id: 'btn-post',
    onclick: createPost,
    title: 'Postar',
  })}
  `;
  const template = `
  <div class='post-area-container'
    <section class="input-area">
      <form class="post-area">
        ${postArea}
      </form>
    </section>
  </div>
  `;
  return template;
}

function printComments(arr) {
  let template = '';
  arr.forEach((text) => {
    template += `
    <li class='comments-list'>${text.userName}<br>${text.newComment}</li>
    `;
  });
  return template;
}

function addPost(post, postId) {
  const LoggedUserID = firebase.auth().currentUser.uid;
  const postTemplate = `
      <li class='post' id="${postId}">
        <p>Postado por ${post.user_name} em ${post.createdAt.toDate().toLocaleString('pt-BR').substr(0, 19)}</p>
        <p class="post-text">${post.text}</p>
        ${LoggedUserID === post.user_id ? '<div class="delete fa fa-trash"></div> <div><span class="edit-post fa fa-pencil"></span></div>' : ''}
        <div class="edit-button"></div>
        <div class="interaction-area">
        <div class="like fa fa-heart"></div>
        ${post.likes}
        <div class='comment-icon fa fa-comments'></div>
        <!----------------------------------------------------Monica mexeu aqui-->
        ${LoggedUserID === post.user_id ? '<select class="privacy"><option value="fa-globe">Público</option><option value="fa-lock"> Privado</option></select>' : ''}
        <!----------------------------------------------------Monica mexeu aqui-->
        <div class="comments">
          <div class="comment-container"></div>
          <ul class='comment-posts'>${printComments(post.comments)}</ul>
        </div>
      </li>
      `;
  return postTemplate;
}

function loadPosts() {
  const postsCollection = db.collection('posts');
  postsCollection.where('privacy', '==', 'public').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
    const postList = document.querySelector('.post-list');
    postList.innerHTML = '';
    snapshot.docs.forEach((post) => {
      postList.innerHTML += addPost(post.data(), post.id);
    });
    document.querySelectorAll('.delete').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        DeletePost(event.target.parentNode.getAttribute('id'));
      });
    });
    document.querySelectorAll('.like').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        LikePost(event.target.parentNode.parentNode.getAttribute('id'));
      });
    });
    document.querySelectorAll('.edit-post').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        EditPost(event.target.parentNode.parentNode.getAttribute('id'));
      });
    });
    document.querySelectorAll('.comment-icon').forEach((icon) => {
      icon.addEventListener('click', (event) => {
        AddComment(event.target.parentNode.parentNode.getAttribute('id'));
      });
    });
    ///////////////////////////////////Monica mexeu aqui
    document.querySelectorAll('.privacy').forEach((selection) => {
      selection.addEventListener('change', (event) => {
        let targetOption = document.querySelector('.privacy').options[document.querySelector('.privacy').selectedIndex].value
        //console.log(targetOption)
        PrivacyPost(event.target.parentNode.parentNode.getAttribute('id'), targetOption);
      });
    });
    ///////////////////////////////////Monica mexeu aqui
  });
}

function Feed() {

  const template = `
  <header class='header'>
    ${Button({
    type: 'button',
    class: 'btn profile-btn hide-mobile',
    id: 'btn-profile',
    onclick: () => window.location = '#profile',
    title: 'Meu Perfil',
  })}
    <div class='header-title'>
      <label for='toggle-side-menu'>
        <div class='fa fa-bars hide-desktop menu-icon'></div>
      </label>
      <p> Horta Urbana </p> 
      <div class='header-img'>
        <img src="./img/cenoura.png">
      </div>
    </div>
    ${Button({
    type: 'button',
    class: 'btn logout-btn hide-mobile',
    id: 'btn-log-out',
    onclick: logOut,
    title: 'Sair',
  })}
    <input 
      type='checkbox'
      id='toggle-side-menu' 
      class='toggle-side-menu hide-desktop'
    />
    <div class='side-menu hide-desktop'>
        ${Button({
    type: 'button',
    class: 'btn profile-btn ',
    id: 'btn-profile',
    onclick: () => window.location = '#profile',
    title: 'Meu Perfil',
  })}
        ${Button({
    type: 'button',
    class: 'btn logout-btn ',
    id: 'btn-log-out',
    onclick: logOut,
    title: 'Sair',
  })}
    </div>
  </header>
  <div class='profile'>${userInfo()}</div>
    ${NewPostTemplate()}
    <section id="printpost" class="print-post">
      <ul class='post-list'>${loadPosts()}</ul>
    </section>
  `;
  return template;
}

export default Feed;
