import Button from '../components/button.js';
import Input from '../components/input.js';

function createPost() {
  const text = document.querySelector('.text-area').value;
  const post = {
    likes: 0,
    text,
    comments: [],
    user_id: firebase.auth().currentUser.displayName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.add(post)
    .then(() => {
      console.log('Post criado com sucesso!');
      //text = ''
    })
    .catch((error) => {
      console.log('erro', error);
      console.log('Não foi possível criar post.');
    });
}

function addPost(post, postId) {
  const postTemplate = `
      <li id="${postId}">

        <div>${post.createdAt.toDate().toLocaleString('pt-BR')}</div>
        ${post.text} 
        <div class="interaction-area">
          Likes:${post.likes}
          <div class="coments">
            <span class='fa fa-comments'></span>
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

function userInfo() {
  //console.log("oi", firebase.auth().currentUser);
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then(doc => {
    const username = `
    <h4>${doc.data().name}</h4>
    <p>${user.email}</p>
    `;
    document.querySelector('.profile').innerHTML = username;
  });  
}

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
  console.log(typeof firebase.firestore.FieldValue.serverTimestamp());
  postsCollection.orderBy('createdAt', 'desc').onSnapshot((snapshot) =>{

    const postList = document.querySelector('.post-list');
    postList.innerHTML = '';
    //console.log(snapshot.docs)
    snapshot.docs.forEach((post) => {
      //console.log(post.data().id)
      postList.innerHTML += addPost(post.data(), post.id);
    })
    // snapshot.docChanges().forEach((change) =>{
    //   let updates = change.doc.data();
    //   //console.log(updates);
    //   postList.innerHTML += addPost(updates);
    // })
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
    <div class='profile'>${userInfo()}</div>
      ${NewPostTemplate()}
      <section class="print-post">
      <ul class='post-list'>${loadPosts()}</ul>
      </section>
  `;
  return template;
}

export default Feed;
