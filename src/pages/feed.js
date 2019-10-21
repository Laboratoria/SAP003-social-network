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

function Posts() {
  const dataBase = firebase.firestore();
  const id = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.email;
  const textInput = document.querySelector('.textarea');
  const post = {
    timestamp: new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    name,
    text: textInput.value,
    likes: 0,
    coments: [],
    user_id: id,
  };
  dataBase.collection('posts').add(post)
    .then((docRef) => {
      document.querySelector('.timeline').insertAdjacentHTML('afterbegin', `
      <ul data-id='${docRef.id}'>
      ${post.timestamp}
      ${post.name}
      ${post.text}
      ${post.likes}
      ${post.coments}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: 'X',
        onClick: window.feed.deletePost,
      })}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: 'v',
        onClick: window.feed.editPost,
      })}
      </ul> `)
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

function feed() {
  let posTemplate = '';
  firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
    .then((snap) => {
      snap.forEach((post) => {
        posTemplate += `<section data-id='${post.id}' class='postMessage'>
      ${post.data().timestamp}- 
      ${post.data().user_id}
      ${post.data().text}
      ${post.data().likes}
      ${Button({
    dataId: post.id,
    title: 'Deletar',
    onClick: deletePost,
  })}
      ${Button({
      dataId: post.id,
      title: 'Editar',
      onClick: editPost,
  })}
  </section>`;
      });
    });

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
    onClick: Posts,
  })}
  <div>
  <li class='timeline'>${posTemplate}</li>
  `;
  return template;
}

window.feed = {
  deletePost,
  editPost,
};

export default feed;
