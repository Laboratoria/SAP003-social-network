import Input from '../components/input.js';
import Button from '../components/button.js';

function Post() {

  const template = `
  <div class="box">
  <header class="header"><img src="./Imagens/header-logo.png"></header>
  <form class="primary-box">
    ${Input({
    class: 'js-post',
    placeholder: 'O que quer compartilhar?',
    type: 'text',
  })}
    ${Button({
    id: 'share',
    title: 'Compartilhar',
    onClick: SharePost,
  })}
  </form>
  <ul id="history"></ul> 
  </div>`;

  Timeline();

  return template;
}
 function Timeline() {
  const email = firebase.auth().currentUser.email;
  const codUid = firebase.auth().getUid(email);
  firebase.firestore().collection(codUid).doc('Post').collection('data').get().then(
    (querySnapshot) => {querySnapshot.forEach((Post) => {
        document.getElementById('history').insertAdjacentHTML('beforeend', `<li>${Post.data().post}</li>`);
      });
    });
}

function SharePost() {
  const contPost = document.querySelector('.js-post').value;
  const email = firebase.auth().currentUser.email;
  const codUid = firebase.auth().getUid(email);
  firebase.firestore().collection(codUid).doc('Post').collection('data').add({
    post: contPost
  }).then(function () {
    console.log('Post Salvo');
    Timeline();
  }).catch(function (error) {
    console.log('O erro é: ', error);
  })
  document.querySelector('.js-post').value = '';
  Timeline();
}



export default Post; 