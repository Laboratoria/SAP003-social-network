import Input from '../components/input.js';
import List from '../components/list-menu.js';
import Button from '../components/button.js';
import Post from '../components/post.js';

const signOut = () => firebase.auth().signOut();

const goProfile = () => {
  window.location = '#profile';
};

const createPost = () => {
  const textInput = document.querySelector('.post-text');
  firebase.firestore().collection('posts').add({
    text: textInput.value,
    userId: firebase.auth().currentUser.uid,
    addedAt: (new Date()).toISOString(),
  }).then(() => {
    textInput.value = '';
  });
};

const addPost = (post) => {
  const postTemplate = Post(post.data());
  document.querySelector('.posts').innerHTML += postTemplate;
};

const loadPost = () => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.orderBy('addedAt', 'desc').onSnapshot((snap) => {
    document.querySelector('.posts').innerHTML = '';
    snap.forEach((post) => {
      addPost(post);
    });
  });
};

loadPost();

const timeline = () => {
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
  <form action="" id="post-form">
    <h1 class="title-timeline">Low Carb Style</h1>
    <img src="images/usuario.png" class="img-usuario">
    <div class="dados-usuario">
      <h3 clas="nome-usuario">Nome</h3>
      <p class="age-user">Idade</p>
      <p clas="bio-usuario"><em>Biografia</em></p>
    </div>
    <div class="container-publicar">
    ${Input({
      class: 'post-text',
      id: 'post-text',
      type: 'textarea',
      placeholder: 'digite aqui...',
    })}
    <img src="images/img-public.png" class="img-public"> 
    ${Button({
      class: 'btn-publicar',
      id: 'btn-publicar',
      type: 'submit',
      title: 'Publicar',
      onClick: createPost,
    })}
      <div class="posts"></div>
      </div> 
  </form>
    `;

  return templateTimeLine;
};

export default timeline;
