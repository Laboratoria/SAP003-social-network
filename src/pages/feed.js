import Button from '../components/button.js';
import PostInput from '../components/textarea.js';
// import Input from '../components/input.js';

function logOut() {
  auth
    .signOut()
    .then(() => {
      console.log('adeus');
      window.location = '#login';
    });
}

function userInfo() {
  console.log('oi', firebase.auth().currentUser);
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then((doc) => {
    const username = `
    <h4>${doc.data().name}</h4>
    <p>${user.email}</p>
    `;
    document.querySelector('.profile').innerHTML = username;
  });
}

function NewPostTemplate() {
  const template = `
  ${PostInput({
    class: 'text-area',
    id: 'post-text',
    placeholder: 'No que está pensando?',
  })}
  ${Button({
    id: 'btn-post',
    class: 'btn',
    onclick: createPost,
    title: 'Postar',
  })}
  `;
  return template;
}

function createPost() {
  const text = document.querySelector('.text-area').value;
  const post = {
    likes: 0,
    text,
    comments: [],
    user_id: firebase.auth().currentUser.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.add(post)
    .then(() => {
      console.log('Post criado com sucesso!');
      loadPosts();
    })
    .catch((error) => {
      console.log('erro', error);
      console.log('Não foi possível criar post.');
    });
}

function addPost(post, postId) {
  const postTemplate = `
    <li id="${postId}">
    <div><span class="edit-post fa fa-pencil"></span></div>
      <p class="post-text">${post.text}</p>
      <div class="edit-button"></div>
      <div class="interaction-area">
        <div class="likes">
          Likes:${post.likes}
        </div>
        <div class="coments">
          Comentários
        </div>
      </div>
    </li>
  `;
  return postTemplate;
}

function save() {
  const id = event.target.dataset.id;
  console.log(id);
  console.log('salvar!');
  const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
  const newText = postText.textContent;
  firebase.firestore().collection('posts').doc(id).update({
    text: newText,
  });
  postText.setAttribute('contentEditable', 'false');
}

function cancel() {
  const id = event.target.dataset.id;
  console.log(id);
  console.log('cancelar');
  const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
  const text = postText.textContent;
  postText.innerHTML = `
  <p class='post-text'>${text}</p>
  `;
  postText.setAttribute('contenteditable', 'false');
}

function editPost(postId) {
  const id = postId;
  console.log(id);
  const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
  // const text = postText.textContent;
  const button = document.getElementById(id).getElementsByClassName('edit-button')[0];
  postText.setAttribute('contenteditable', 'true');
  button.innerHTML = `
    ${window.button.component({
    id: 'btn-save',
    class: 'btn save-btn',
    dataId: postId,
    onclick: save,
    title: 'Salvar',
  })}
    ${window.button.component({
    id: 'btn-cancel',
    class: 'btn cancel-btn',
    dataId: postId,
    onclick: cancel,
    title: 'Cancelar',
  })}
  `;
}

function loadPosts() {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get()
    .then((res) => {
      const postList = document.querySelector('.post-list');
      postList.innerHTML = '';
      res.forEach((post) => {
        postList.innerHTML += addPost(post.data(), post.id);
      });
      document.querySelectorAll('.edit-post').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          editPost(event.target.parentNode.parentNode.getAttribute('id'));
        });
      });
    });
}

function Feed() {
  const template = `
    ${window.button.component({
    type: 'button',
    class: 'btn',
    id: 'btn-log-out',
    onclick: logOut,
    title: 'Sair',
  })}
  <div class='profile'>${userInfo()}</div>
  <section class="post-area">
    <form class="input-area">
      ${NewPostTemplate()}
    </form>
  </section>
  <section class="print-post">
    <ul class='post-list'>${loadPosts()}</ul>
  </section>
  `;
  return template;
}

export default Feed;

window.loadPosts = loadPosts;