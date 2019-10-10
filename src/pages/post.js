import Input from '../components/input.js';
import Button from '../components/button.js';

function Post() {
  const template = `
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
  `;
  return template;
}

function SharePost() {
  const docRef = firebase.firestore().collection('timeline');
  const contPost = document.querySelector('.js-post').value;
  docRef.add({
    post: contPost
  }).then(function() {
    console.log('Post Salvo');
  }).catch(function(error) {
    console.log('O erro é: ', error);
  })
}
export default Post;

