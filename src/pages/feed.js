import Button from '../components/button.js';
import Input from '../components/input.js';


function NewPostTemplate() {
  const postArea = `
  ${Input({
    type: 'text',
    class: 'text-area',
    id: 'post-text',
    placeholder: 'texto',
  })}
  ${Button({
    type: 'button',
    class: 'btn',
    id: 'btn-post',
    onclick: createPost,
    title: 'Postar',
  })}
  `;
  const template = `
  <section class="post-area">
   <form class="input-area">
      ${postArea}
    </form>
  </section>
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
    text,
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
  <section class="print-post">
    <ul class="post-list">
      <li id="${post.id}">
        ${post.text} 
        <div class="interaction-area">
          Likes:${post.likes}
          <div class="coments">
            Comentarios
          </div>
        </div>
      </li>
    </ul>    
  </section
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

function userInfo() {
  console.log("oi", firebase.auth().currentUser);
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then(doc => {
    const username = `
    <h4>${doc.data().name}</h4>
    <p>${user.email}</p>
    `;
    document.querySelector('.profile').innerHTML = username;
  });  
}

function Feed() {
  const template = `
    ${Button({
      type: 'button',
      class: 'btn',
      id: 'btn-log-out', 
      onclick:logOut, 
      title: 'Sair'
    })}
    <div class='profile'></div>
      ${NewPostTemplate()}
      <ul class='post-list'></ul>
  `;
  userInfo();
  loadPosts();
  return template;
}

export default Feed;

window.loadPosts = loadPosts;
