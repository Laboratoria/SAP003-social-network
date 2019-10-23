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
    <div class='postHeader'>${post.timestamp}</div>
    <div class='postHeader'>${post.name} disse:</div>
    <div id='post_${docRef.id}'>${post.text}</div>
    ${post.likes}
    ${post.comments}
    ${window.button.component({
      dataId: docRef.id,
      class: 'primary-button',
      title: '🗑️',
      onClick: window.feed.deletePost,
    })}
    ${window.button.component({
      id: 'edit-'+docRef.id,
      dataId: docRef.id,
      class: 'primary-button',
      title: '✏️',
      onClick: window.feed.editPost
    })}

    </li> `)
    console.log(post)
  });
}

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
}

function editPost(event) {
  const id = event.target.dataset.id;
  document.getElementById('post_'+id).contentEditable = true;
  document.getElementById('post_'+id).style.border = '1px solid black';
  document.querySelector('#edit-'+id).innerHTML = '✔️';
  document.querySelector('#edit-'+id).addEventListener('click', window.feed.saveEdit);
}

function saveEdit () {
  const id = event.target.dataset.id;
  document.getElementById('post_'+id).contentEditable = false;
  document.getElementById('post_'+id).style.border = '';
  document.querySelector('#edit-'+id).innerHTML = '✏️';
  const text = document.querySelector('#post_'+id).textContent;
  firebase.firestore().collection('posts').doc(id).update({text});
  document.querySelector('#edit-'+id).removeEventListener('click', window.feed.saveEdit);
}

function loadFeed () {
  firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      const postsFeed =  `<li data-id='${post.id}' class='postMessage'>
      <div class='postHeader'>${post.data().timestamp}-</div>
      <div class='postHeader'>${post.data().user_id} disse:</div>
      <div id='post_${post.id}'>${post.data().text}</div>
      ${post.data().likes}
      ${Button({
        dataId: post.id,
        title: '🗑️',
        class: 'primary-button',
        onClick: deletePost,
      })}
      ${Button({
        id: 'edit-'+post.id,
        dataId: post.id,
        title: '✏️',
        class: 'edit-btn primary-button',
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
  AddPostToFirebase,
  saveEdit
};

export default Feed;
