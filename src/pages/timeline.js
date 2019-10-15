import Input from '../components/input.js';
import List from '../components/list-menu.js';
import Button from '../components/button.js';
import Card from '../components/card.js';


const signOut = () => firebase.auth().signOut();

const creatPost = () => {
  const text = document.querySelector('.post-text').value;
  firebase.firestore().collection('posts').add({
    text: text,
    userId: firebase.auth().currentUser.uid,
  }).then(result => alert('foicaceta'));
  document.querySelector('.publication').innerHTML = text;
}
const addPost = (post) => {
  const postTemplate = `
    <p class='${post.class}'>
      ${post.data().text}
    </p>
  `
  document.querySelector('.publication').innerHTML += postTemplate;
}
 
const loadPost = () => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get().then(snap => {
    snap.forEach(post => {
      addPost(post)
    })
  })
}

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
    class: 'timeline',
    title: 'Timeline',
  })}
    ${List({
    class: 'profile',
    title: 'Perfil',
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
      <p clas="bio-usuario"><em>Biografia</em></p>
    </div>
    <div class="container-publicar">
      ${Input({
      class: 'post-text',
      id: 'post-text',
      type: 'textarea',
      placeholder: 'digite aqui...'
    })}
    <img src="images/img-public.png" class="img-public"> 
      ${Button({
        class: 'btn-publicar',
        id: 'btn-publicar',
        type: 'submit',
        title: 'Publicar',
        onClick: creatPost,
      })}
      <div class="container-public">
      ${Card({
        class: 'publication',
      })}
      </div>
      </div> 
  </form>
    `;

  return templateTimeLine;
};

export default timeline;

