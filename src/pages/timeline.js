import Input from '../components/input.js';
import List from '../components/list-menu.js';
import Button from '../components/button.js';
import Post from '../components/post.js';
import Textarea from '../components/textarea.js';
import Bio from '../components/bio.js';

const signOut = () => firebase.auth().signOut();

const goProfile = () => {
  window.location = '#profile';
};

const createPost = () => {
  const textInput = document.querySelector('.post-text').value;
  const selectPrivacy = document.querySelector('.slc-privacy').value;
  if (textInput === '') {
    alert('Campo Vazio! Digite sua mensagem');
  } else {
    firebase.firestore().collection('posts').add({
      text: textInput,
      userId: firebase.auth().currentUser.uid,
      addedAt: (new Date()).toLocaleString('pt-BR'),
      likes: 0,
      comments: [],
      privacy: selectPrivacy,
    })
      .then(() => {
        textInput.value = '';
      });
  }
};

const deletePost = (event) => {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
};

const enableField = (event) => {
  const id = event.target.dataset.id;
  document.querySelector(`[data-id=text-${id}]`).contentEditable = 'true';
};

const updatePost = (event) => {
  const id = event.target.dataset.id;
  const editedPost = document.querySelector(`[data-id=text-${id}]`).textContent;
  firebase.firestore().collection('posts').doc(id).update({ text: editedPost, addedAt: (new Date()).toLocaleString('pt-BR') });
};

const timeline = (props) => {
  let layout = '';
  props.posts.forEach((snap) => {
    const post = snap.data();
    if (post.userId === firebase.auth().currentUser.uid || post.privacy === '🔓') {
      layout += Post({
        id: snap.id,
        post,
        deleteEvent: deletePost,
        updateEvent: updatePost,
        enableEvent: enableField,
      });
    }
  });

  const templateTimeLine = `
    ${Input({
    class: 'navigation',
    id: 'navigation',
    type: 'checkbox',
  })}
    <label for="navigation">&#9776;</label>
    <nav class="menu">
      <ul>
  ${List({
    class: 'profile',
    title: 'Perfil',
    onClick: goProfile,
  })}
  ${List({
    class: 'out',
    title: 'Sair',
    onClick: signOut,
  })}
      </ul>
    </nav>
    <h1 class="title-timeline">Low Carb Style</h1>  
  ${Bio(props.user || {})}
  <form>
    <div class="container-publish">
      <div class="textarea-publish">
      ${Textarea({
    class: 'post-text',
    id: 'post-text',
    placeholder: 'digite aqui...',
  })}
      </div>
    <select class="slc-privacy">
      <option value="" disabled selected>🔐</option>
      <option value="🔓">Público 🔓</option>
      <option value="🔐">Privado 🔐</option>
    </select>
      <div class="images-publish">
        <img src="images/img-public.png" class="img-public"> 
        ${Button({
    class: 'btn-publicar',
    id: 'btn-publicar',
    type: 'submit',
    title: 'Publicar',
    onClick: createPost,
  })}
      </div> 
    </div>
      <div class="posts">
      ${layout}
      </div>
  </form>
    `;

  return templateTimeLine;
};

export default timeline;
