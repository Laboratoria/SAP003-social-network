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

function loadPosts() {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get()
    .then((res) => {
      const postList = document.querySelector('.post-list');
      postList.innerHTML = '';
      res.forEach((post) => {
        postList.innerHTML += addPost(post.data(), post.id);
      });
      document.querySelectorAll('.delete').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          deletePost(event.target.parentNode.getAttribute('id'))
        })
      })
      document.querySelectorAll('.like').forEach((btn) => {
        btn.addEventListener('click', (event) => {
        likePost(event.target.parentNode.parentNode.getAttribute('id'))
          console.log(event.target.parentNode.parentNode.getAttribute('id'))
        })
      })
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

function addPost(post, postId) {
  const LoggedUserID = firebase.auth().currentUser.uid
  const postTemplate = `
      <li class='post' id="${postId}">
        <div class='post-text'> ${post.text}</div> 
        ${LoggedUserID === post.user_id ? '<div class="delete fa fa-trash"></div>' : '' }
        <div class="interaction-area">
        <div class="like fa fa-heart"></div>
        ${post.likes}
          <div class="coments">
            Comentarios
          </div>
        </div>
      </li>
      `;
  return postTemplate;
}

   

function deletePost(postId){
  if(!confirm('Tem certeza que deseja excluir essa publicação?')) return
     const postsCollection = firebase.firestore().collection('posts');
    postsCollection.doc(postId).delete().then( () => {
      loadPosts() 
    })
    .catch( (error) => {
      console.log(error)
    })
}

async function likePost (postId){
  const postsCollection = firebase.firestore().collection('posts');
  const actualPost = await postsCollection.doc(postId).get()
  postsCollection.doc(postId).set({
    ...actualPost.data(),
    likes: ++actualPost.data().likes
  })
  loadPosts()  
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
    return username
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
      onclick:logOut, 
      title: 'Sair'
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
      onclick:logOut, 
      title: 'Sair'
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

export default Feed

window.loadPosts = loadPosts;
