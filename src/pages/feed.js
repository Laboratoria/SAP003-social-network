import Button from '../components/button.js';
import Input from '../components/input.js';


function NewPostTemplate() {
  const template = `
  ${Input({
    type: 'text',
    class: 'text-area',
    id: 'post-text',
    placeholder: 'sdjhsjdh',
  })}
  ${Button({
    type: 'button',
    class: 'btn',
    id: 'btn-post',
    onclick: createPost,
    title: 'postar',
  })}
  </form>
  `;
  return template;
}

 
function createPost(){
  const text = document.querySelector('.text-area').value
  const post = {
    likes: 0,
    text,
    comments: [],
    user_id: firebase.auth().currentUser.uid,
  }
  const postsCollection = firebase.firestore().collection('posts')
  postsCollection.add(post)
    .then(() => {
      console.log('Post criado com sucesso!')
      loadPosts()
      postsCollection.get()
    })
    .catch((err) => {
      console.log('erro', err)
      console.log('Não foi possível criar post.')
    })
}

function addPost(post) {
  const postTemplate = `
  <li id="${post.id}">
    ${post.text} Likes:${post.likes}
  </li>`
  return postTemplate;
}

function loadPosts() {
  const postsCollection = firebase.firestore().collection('posts')
  postsCollection.get()
    .then((res) => {
      const postList = document.querySelector('.post-list')
      postList.innerHTML = ''
      res.forEach((post) => {
        postList.innerHTML += addPost(post.data())
      })
  })
}


function logOut() {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem('user')
      console.log('adeus');
      auth.onAuthStateChanged(function(){
        window.location = '#login';
      })
    })
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



/*
//função para eventlistener do botão Publicar
function publishText() {
  console.log('publicou');
  const userText = document.getElementById('user-publication').value;
  db.collection('publi').add({
    text: userText,
    likes: 0,
    comments: [],
    user-id: current user displayName
  });
}
*/


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
  console.log(firebase.auth().currentUser.email);
  return template;
}
window.loadPosts = loadPosts;

export default Feed;
