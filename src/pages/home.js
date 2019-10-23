import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function loadPost() {
  const postColletion = firebase
    .firestore()
    .collection('posts')
    .where('user', '==', window.user.uid);
  const postList = document.querySelector('.post-ul');
  postColletion.get().then((snap) => {
    postList.innerHTML = '';
    snap.forEach((post) => {
      postList.innerHTML += addPost(post.data(), post.id);
    });
  });
}

function publish() {
  const textArea = document.querySelector('.post');
  const fieldValue = firebase.firestore.FieldValue;
  const id = firebase.auth().currentUser.uid;
  const post = {
    user: id,
    text: textArea.value,
    likes: 0,
    coments: [],
    timestamp: fieldValue.serverTimestamp(),
  };
  const postColletion = firebase.firestore().collection('posts');
  postColletion.add(post).then(() => {
    textArea.value = '';
    window.home.loadPost();
    postColletion.get();
  });
  return post;
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location = '#login';
    });
}

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase
    .firestore()
    .collection('posts')
    .doc(id)
    .delete();
  event.target.parentElement.remove();
}

function saveEdit(event) {
  const id = event.target.dataset.id;
  const textAreaEdit = document.querySelector('.edit-textArea');
  firebase
    .firestore()
    .collection('posts')
    .doc(id)
    .update({
      text: textAreaEdit.value,
    });
  window.home.loadPost();
}

function editPost(event) {
  const postId = event.target.dataset.id;
  const postText = document.getElementById(postId).querySelector('.p-text').innerHTML;
  const postArea = document.getElementById(postId);
  postArea.innerHTML = ` 
  ${window.textarea.component({
    class: 'edit-textArea',
    text: postText,
  })}
  ${window.button.component({
    dataId: postId,
    id: 'edit-button',
    title: 'Editar',
    call: window.home.saveEdit,
  })} `;
}

function feed() {
  const template = `
  <p>${firebase.auth().currentUser.displayName}</p>
<img src="../../imagens/logo.png"></img class="image-logo">
${Textarea({ class: 'post' })}
${Button({ id: 'publish', title: 'Publicar', call: publish })}
<div class ='post-public'>
<ul class='post-ul'>
</ul>
${Button({ id: 'logout', title: 'Sair', call: logout })}
</div>
`;
  return template;
}

function addPost(post, postId) {
  const postTemplate = `
  <li id='${postId}' class='post-li'>
  <div>
    ${post.timestamp.toDate().toLocaleString('pt-BR')}:
    <p class = 'p-text'> ${post.text} </p>
    🏆 ${post.likes} 
  </div>
  <div>
    ${window.button.component({
    dataId: postId,
    title: 'Deletar',
    call: window.home.deletePost,
  })}
    ${window.button.component({
    dataId: postId,
    title: 'Editar',
    call: window.home.editPost,
  })}
</div>
</li>
`;
  return postTemplate;
}

export default feed;

window.home = {
  editPost,
  deletePost,
  loadPost,
  saveEdit,
  addPost,
};
