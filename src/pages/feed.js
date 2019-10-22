import Button from '../components/button.js';
import Post from '../components/post.js';

function signOut() {
  firebase.auth().signOut().then(() => {
    window.location.hash = '#login';
    alert('Agora tu saiu.');
  });
}

function profile() {
  window.location.hash = '#perfil';
}

function AddPostToFirebase() {
  const dataBase = firebase.firestore();
  const id = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.email;
  const textInput = document.querySelector('.textarea');
  const post = {
    timestamp: new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    name,
    text: textInput.value,
    likes: 0,
    comments: [],
    user_id: id,
  };
  dataBase.collection('posts').add(post)
    .then((docRef) => {
      document.querySelector('.timeline').insertAdjacentHTML('afterbegin', `
      <li class='postMessage' data-id='${docRef.id}'>
      ${post.timestamp}
      ${post.name}
      ${post.text}
      ${post.likes}
      ${post.comments}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: '🗑️',
        onClick: window.feed.deletePost,
      })}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: '✏️',
        onClick: window.feed.editPost,
      })}
      </li> `)
    });
}

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
}

function editPost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).update();
  event.target.parentElement.add();
}

function loadFeed () {
  firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((post) => {
      const postsFeed =  `<li data-id='${post.id}' class='postMessage'>
      ${post.data().timestamp}-
      ${post.data().user_id} disse:
      ${post.data().text}
      ${post.data().likes}
      ${Button({
    dataId: post.id,
    title: '🗑️',
    onClick: deletePost,
  })}
      ${Button({
      dataId: post.id,
      title: '✏️',
      onClick: editPost,
  })}
  </li>`;
  document.querySelector('.timeline').innerHTML += postsFeed;
      });
    });
}

function Feed() {
  window.feed.loadFeed();
  const template = `
  <h1>Feed</h1>
  ${Button({
    title: 'Sair',
    class: 'primary-button',
    onClick: signOut,
  })}
  ${Button({
    title: 'Perfil',
    class: 'primary-button',
    onClick: profile,
  })}
  <h2>Post</h2>
  <div class='post'>
  ${Post({
    class: 'textarea',
    id: 'post-textarea',
    placeholder: 'Escreva aqui',
    type: 'text',
  })}
  ${Button({
    title: 'Postar',
    class: 'primary-button',
    onClick: AddPostToFirebase,
  })}
  <div>
  <ul class= 'timeline'></ul>
  `;

  return template;
}

window.feed = {
  deletePost,
  editPost,
  loadFeed,
  AddPostToFirebase
};

export default Feed;
