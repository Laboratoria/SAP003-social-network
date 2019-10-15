import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    ${Textarea({ id: 'post', class: 'post' })}
    ${Button({ id: 'publish', title: 'Publish'})}
    `;

  return template;
}

export default feed;
