import Button from '../components/button.js';
// import Input from '../components/input.js';
import PostInput from '../components/postinput.js';

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
    type: 'button',
    class: 'btn',
    id: 'btn-post',
    onclick: createPost,
    title: 'Postar',
  })}
  `;
  return template;
}

function loadPosts() {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get()
    .then((res) => {
      const postList = document.querySelector('.post-list');
      postList.innerHTML = '';
      res.forEach((post) => {
        postList.innerHTML += addPost(post.data());
      });
    });
}

function createPost() {
  const text = document.querySelector('.text-area').value;
  const post = {
    likes: 0,
    text: text,
    comments: [],
    user_id: firebase.auth().currentUser.uid,
  };
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.add(post)
    .then(() => {
      console.log('Post criado com sucesso!');
      loadPosts();
      postsCollection.get();
    })
    .catch((error) => {
      console.log('erro', error);
      console.log('Não foi possível criar post.');
    });
}

function addPost(post) {
  const postTemplate = `
      <li id="${post.id}">
        ${post.text}; 
        <div class="interaction-area">
          <div class="likes">
            Likes:${post.likes}
          </div>
          <div class="coments">
            Comentarios
          </div>
        </div>
      </li>
  `;
  return postTemplate;
}

function logOut() {
  auth
    .signOut()
    .then(() => {
      console.log('adeus');
      window.location = '#login';
    });
}

function Feed() {
  const template = `
    ${Button({
    type: 'button',
    class: 'btn',
    id: 'btn-log-out',
    onclick: logOut,
    title: 'Sair',
  })}
  <div class='profile'></div>
  <section class="post-area">
    <form class="input-area">
      ${NewPostTemplate()}
    </form>
  </section>
  <section class="print-post">
    <ul class='post-list'>${addPost}</ul>
  </section>
  `;
  userInfo();
  loadPosts();
  return template;
}

export default Feed;

window.loadPosts = loadPosts;