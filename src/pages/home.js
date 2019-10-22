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
  firebase.auth()
    .signOut()
    .then(() => {
      window.location = '#login';
    });
}
function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
}
function saveEdit(postId) {
  const id = postId;
  console.log(id);
  const textAreaEdit = document.querySelector('.edit-textArea');
  const text = document.querySelector('.p-text');
  text.innerHTML = `
  <p class = 'p-text'> ${textAreaEdit.value} </p>
  `;
  firebase.firestore().collection('posts').doc(id).update({
    text: textAreaEdit,
  });
}

function editPost() {
  const text = document.querySelector('.p-text');
  text.innerHTML = ` 
  ${window.textarea.component({
    class: 'edit-textArea',
    id: 'dataId',
    value: text,
  })}
  ${window.button.component({
    id: 'edit-button',
    title: 'Editar',
    call: window.home.saveEdit,
  })} `;
}

function feed() {
  const template = `
  <p>${firebase.auth().currentUser.displayName}</p>
<img src="../../imagens/logo.png"></img class="image-logo">
${Textarea({ id: 'post', class: 'post' })}
${Button({ id: 'publish', title: 'Publish', call: publish })}
<div class ='post-public'>
<ul class='post-ul'>
</ul>
${Button({ id: 'logout', title: 'logout', call: logout })}
</div>
`;
  return template;
}

function addPost(post, postId) {
  const postTemplate = `
  <div>
<li data-id='${postId}' class='post-li'>
${post.timestamp.toDate().toLocaleString('pt-BR')}: </br >
<p class = 'p-text'> ${post.text} </p> </br >
🏆 ${post.likes}
</li>
</div>
<div>
${window.button.component({ dataId: postId, title: 'deletar', call: window.home.deletePost })
}
${window.button.component({ dataId: postId, title: 'editar', call: window.home.editPost })
}
</div>`;
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
