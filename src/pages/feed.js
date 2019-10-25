import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import { AddComment, DeleteComment, PrivacyPost, EditPost, LikePost, DeletePost } from '../posts/functions.js';
import { UserInfo, AddBio, CreateBio } from '../posts/edit-profile.js';



function logOut() {
  auth
    .signOut()
    .then(() => {
      window.location = '#login';
    });
}
 
// function userInfo() {
//   const user = auth.currentUser;
//   db
//     .collection('users')
//     .doc(user.uid)
//     .get()
//     .then((doc) => {
//       const username = `
//       <h4>Bem vindo(a), ${doc.data().name}!</h4>
//     `;
//     document.querySelector('.profile').innerHTML = username;
//   });
// }

function addPost(post, postId) {
  const imageTemplate = `<img class='preview-picture' src='${post.image_url}'>`
  const LoggedUserID = auth.currentUser.uid; 
  const postTemplate = `
      <li class='post' id="${postId}">
        <p class='username'>Postado por <strong><span id='${post.user_id}'>${post.user_name}</span></strong></p> 
        <p class='date'>${post.createdAt.toDate().toLocaleString('pt-BR').substr(0, 19)}</p>
        <p class="post-text">${post.text}</p>
        ${post.image_url ? imageTemplate : ''}
        ${LoggedUserID === post.user_id ? '<div class="delete fa fa-trash"></div> <div><span class="edit-post fa fa-pencil"></span></div>' : ''}
        <div class="edit-button"></div>
        <div class="post-footer">
          <div class="interaction-area">
            <div>
              <div class="like fa fa-heart"></div>
              ${post.likes}
            </div>
            <div class='comment-icon fa fa-comments'>
            ${LoggedUserID === post.user_id && location.hash == '#feed' ? '<select class="privacy"><option value="fa-globe">Público</option><option value="fa-lock"> Privado</option></select>' : ''}
            </div>
          </div>
          <div class="comments">
            <div class="comment-container"></div>
            ${post.comments.length > 0 ?`<p><strong>Comentários:</strong></p>`:''}
            <ul class='comment-posts'>${printComments(post.comments, LoggedUserID)}</ul>
          </div>
        </div>
      </li>
      `;
  return postTemplate;
}
 
function createPost() {
  const image = document.getElementById('image-preview')
  const text = document.querySelector('.text-area').value;
  const user = auth.currentUser;
  db
    .collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {

      const post = {
        likes: 0,
        user_likes: [],
        text,
        comments: [],
        user_name: doc.data().name,
        user_id: user.uid,
        image_url: image ? image.src : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        privacy: 'public',
      };

      db
        .collection('posts')
        .add(post)
        .then();
        
      document.querySelector('.text-area').value = '';
      const errorMessage = document.getElementById('messageImage');
      errorMessage.textContent = ''
      document.getElementById('image-preview-container').innerHTML = ''
    });
}

function getFirstLetter(userName){
  return userName[0]
}

function NewPostTemplate() {
  const postArea = `
  ${Textarea({
    class: 'text-area',
    id: 'post-text',
    placeholder: 'No que você está pensando?',
    value: '',
  })}
  <div class='footer-post'>
    <div class = 'action'>
      <label for='input-photo' class='fa fa-image'></label>
      <div class="image-preview-container" id='image-preview-container'></div>
      <input type='file' class='input-photo' id='input-photo'>
      ${Button({
        type: 'button',
        class: 'btn btn-gray btn-post',
        id: 'btn-post',
        onclick: createPost,
        title: 'Postar',
      })}
    </div>
    <div class='surpriseUsers' id='surpriseUsers'>
      <progress style='display:none;' value='0' max='100' id='uploader' class='upload-bar'>0%</progress>
      <div id='messageImage'></div>
    </div>
  </div>
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

function printComments(arr, logged) {
  let template = '';
  arr.forEach((text) => {
    template += `
    <li class='comments-list' data-userid='${text.id}'  data-ref='${text.idComment}'>
      <div class='letterIcon'>${getFirstLetter(text.userName)}</div> 
      <div class= 'comment-area'>
      ${logged === text.id ? '<div class="delete-comment fa fa-trash"></div>':''}
      <div class='user'>${text.userName}:</div>
      <div class='text-comment'>${text.newComment}</div>
      </div>
    </li>
    `;
  });
  return template;
}
 
function checkIsProfile (profileValue, feedValue) {
  return location.hash === '#profile' ? profileValue : feedValue;
}

function loadPosts() {
  const firstQueryProp = checkIsProfile('user_id', 'privacy')
  const secondQueryProp = checkIsProfile(firebase.auth().currentUser.uid, 'public')
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection
    .where(firstQueryProp, '==', secondQueryProp)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
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
      document.querySelectorAll('.delete-comment').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          DeleteComment(event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.like').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          LikePost(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.edit-post').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          EditPost(event.target.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.comment-icon').forEach((icon) => {
        icon.addEventListener('click', (event) => {
          AddComment(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.privacy').forEach((selection) => {
        selection.addEventListener('change', (event) => {
          let targetOption = document.querySelector('.privacy').options[document.querySelector('.privacy').selectedIndex].value
          PrivacyPost(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id'), targetOption);
        });
      });
    });
}

function userDescription(){
  const template =`
    <section class='user-profile'>
        <div class='profile-name'>
        ${UserInfo()}
        </div>
        <section class='user-bio'>
          ${AddBio()}
        </section>
        ${CreateBio()}
        <div class='edit-button'></div>
      </section>
      `;
    return template;
  }

function Feed() {
  const nameBtn = checkIsProfile('Feed', 'Meu Perfil');
  const template = `
  <header class='header'>
    ${Button({
    type: 'button',
    class: 'btn profile-btn hide-mobile',
    id: 'btn-profile',
    onclick: () => {
      window.location = location.hash === '#profile' ? '#feed' : '#profile'
    },
    title: nameBtn,
  })}
    <div class='header-title'>
      <label for='toggle-side-menu'>
        <div class='fa fa-bars hide-desktop menu-icon'></div>
      </label>
      <p> Horta Urbana </p> 
      <div class='header-img'>
        <img src="./img/fruits.svg">
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
    onclick: () => {
      window.location = location.hash === '#profile' ? '#feed' : '#profile'
    },
    title: nameBtn,
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
  
  ${userDescription()}
    ${NewPostTemplate()}
    <section id="printpost" class="print-post">
      <ul class='post-list'>${loadPosts()}</ul>
    </section>
  `;
  return template;
}

export default Feed;

