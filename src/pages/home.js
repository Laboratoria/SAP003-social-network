import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

var userCollection = db.collection('users').doc('user.uid');
console.log(userCollection);

function feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    <p>Bem vinda!</p>
    <p>O que você deseja postar agora...</p>
    ${Textarea({ id: 'post', class: 'post' })}
    ${Button({ id: 'publish', title: 'Publish'})}
    `;

  return template;
}

export default feed;