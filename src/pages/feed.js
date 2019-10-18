import Button from '../components/button.js';
import PostInput from '../components/postinput.js';
import Input from '../components/input.js';

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

function editPost(postId) {
  // const teste = "lalala"
  const postText = document.querySelector('.post-text');
  const textField = postText.textContent;
  postText.innerHTML = `
  <form class="edit-section">
  ${Input({
    type: 'text',
    class: 'text-area',
    value: textField,
  })}
  ${Button({
    id: 'btn-save',
    class: 'btn save-btn',
    // onclick: saveEdition,
    title: 'Salvar',
  })}
  ${Button({
    id: 'btn-cancel',
    class: 'btn cancel-btn',
    // onclick: cancelEdition,
    title: 'Cancelar',
  })}
  </form>
  `;

  document.querySelector('.cancel-btn').addEventListener('click', () => {
    document.querySelector('.edit-section').innerHTML = `
      <p class="post-text">${textField}</p>
    `;
  });

  document.querySelectorAll('.save-btn').addEventListener('click', () => {
    const newText = document.querySelector('.text-area').value;
    const edited = document.querySelector('.edit-section');
    edited.innerHTML = `
        <p class="post-text">${newText}</p>
        `;
  });
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.doc(postId).update({ text: edition });
  console.log(postText);
  console.log(textField);
}


// function saveEdition() {
//   const newText = document.querySelector('.text-area').value;
//   const edited = document.querySelector('.edit-section');
//   edited.innerHTML = `
//     <p class="post-text">${newText}</p>
//     `;
//   return edited;
// }

// function cancelEdition() {
//   document.querySelector('.edit-section').innerHTML = `
//     <p class="post-text">${textField}</p>
//   `;
// }

function Feed() {
  const template = `
    ${Button({
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


// PostInput({
//   class: 'text-area',
//   id: 'post-text',
//   placeholder: '',