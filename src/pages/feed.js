import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

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
  const image = document.getElementById('image-preview')
  const text = document.querySelector('.text-area').value;
  const post = {
    likes: 0,
    text,
    comments: [],
    user_name: firebase.auth().currentUser.displayName,
    user_id: firebase.auth().currentUser.uid,
    image_url: image ? image.src : null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    privacy: 'public',
  };
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection
    .add(post)
    .then()
    .catch((error) => {
      console.log('erro', error);
      console.log('Não foi possível criar post.');
    });
  document.querySelector('.text-area').value = '';
  const errorMessage = document.getElementById('messageImage');
  errorMessage.textContent = ''
  document.getElementById('image-preview-container').innerHTML = ''
}

function printComments(arr) {
  let template = '';
  arr.forEach((text) => {
    template += `
    <li class='comments-list'>
      <div class='letterIcon'>${getFirstLetter(text.userName)}</div> 
      <div class= 'comment-area'>
        <div class='user'>${text.userName}:</div>
        <div class='text-comment'>${text.newComment}</div>
      </div>
    </li>
    `;
  });
  return template;
}

function goToProfile(userId) {
  console.log(userId)
}

function addPost(post, postId) {
  const imageTemplate = `<img class='preview-picture' src='${post.image_url}'>`
  const LoggedUserID = firebase.auth().currentUser.uid;
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
            <div class='comment-icon fa fa-comments'></div>
          </div>
          <div class="comments">
            <div class="comment-container"></div>
            ${
              post.comments.length > 0 ?
              `<p><strong>Comentários:</strong></p><ul class='comment-posts'>${printComments(post.comments)}</ul>`
              :   ''
            }
          </div>
        </div>
      </li>
      `;
  return postTemplate;
}

function saveComment() {
  const newComment = document.querySelector('.textarea-comment').value;
  const datasetid = event.target.dataset.id;
  db.collection('users').doc(auth.currentUser.uid).get().then((doc) => {
    const userName = doc.data().name;
    const docPost = db.collection('posts').doc(datasetid);
    docPost.update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        userName,
        newComment,
      }),
    });
  });
}

function cancelComment() {
  const datasetid = event.target.dataset.id;
  document.getElementById(datasetid).querySelector('.comment-container').innerHTML = '';
}

function addComment(postId) {
  const commentArea = `
    ${Textarea({
    class: 'textarea-comment edit-textarea',
    placeholder: 'Escreva um comentário',
  })}
  <div>
  ${Button({
  type: 'button', 
  class: 'btn',
  id: 'btn-comment-cancel',
  dataId: postId,
  onclick: cancelComment,
  title: 'Cancelar',
})}
    ${Button({
    type: 'button',
    class: 'btn btn-gray',
    id: 'btn-comment-post ',
    dataId: postId,
    onclick: saveComment,
    title: 'Postar',
  })}
  </div>
  `;
  const createSection = document.getElementById(postId).querySelector('.comment-container');
  createSection.innerHTML = `${commentArea}`;
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

function save() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const saveEdit = document.querySelector('.edit-textarea').value;
  const buttonPencil = document.getElementById(id).querySelector('.edit-post');  
  postText.innerHTML = `
  <p class='post-text'>${saveEdit}</p>
  `;
  firebase.firestore().collection('posts').doc(id).update({
    text: saveEdit,
  });
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
  buttonPencil.style.display = 'block' 
}

function cancel() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const text = postText.textContent;
  const buttonPencil = document.getElementById(id).querySelector('.edit-post');  
  postText.innerHTML = `
  <p class='post-text'>${text}</p>
  `;
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
  buttonPencil.style.display = 'block'

}

function editPost(postId) {
  const id = postId;
  const postText = document.getElementById(id).querySelector('.post-text');
  const button = document.getElementById(id).querySelector('.edit-button');
  const buttonPencil = document.getElementById(id).querySelector('.edit-post');
  const text = postText.textContent;
  postText.innerHTML = `
  ${Textarea({
    class: 'edit-textarea',
    id: 'edit-textarea',
    placeholder: '',
    value: text,
  })}
  `;
  button.innerHTML = `
  ${Button({
  id: 'btn-cancel',
  class: 'btn cancel-btn',
  dataId: postId,
  onclick: cancel,
  title: 'Cancelar',
})}
    ${Button({
    id: 'btn-save',
    class: 'btn save-btn btn-gray',
    dataId: postId,
    onclick: save,
    title: 'Salvar',
  })}
  `;
  buttonPencil.style.display = 'none'
}

function deletePost(postId) {
  if (!confirm('Tem certeza que deseja excluir essa publicação?')) return;
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.doc(postId).delete().then(() => {
  })
    .catch((error) => {
      console.log(error);
    });
}

async function likePost(postId) {
  const postsCollection = firebase.firestore().collection('posts');
  const actualPost = await postsCollection.doc(postId).get();
  postsCollection.doc(postId).set({
    ...actualPost.data(),
    likes: ++actualPost.data().likes,
  });
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
          deletePost(event.target.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.like').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          likePost(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.edit-post').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          editPost(event.target.parentNode.parentNode.getAttribute('id'));
        });
      });
      document.querySelectorAll('.comment-icon').forEach((icon) => {
        icon.addEventListener('click', (event) => {
          addComment(event.target.parentNode.parentNode.parentNode.getAttribute('id'));
        });
      });
    });
}

function Feed() {
  const nameBtn = checkIsProfile('Feed', 'Meu Perfil')
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
  <div class='profile'>${userInfo()}
  </div>
    ${NewPostTemplate()}
    <section id="printpost" class="print-post">
      <ul class='post-list'>${loadPosts()}</ul>
    </section>
  `;
  return template;
}

// <section class=‘user-profile’>
//     <div class=‘profile-name’>
//     ${userInfo()}
//     </div>
//     <section class=‘user-bio’>
//       ${addBio()}
//     </section>
//     ${createBio()}
//     <div class=“edit-button”></div>
//   </section>

export default Feed;
