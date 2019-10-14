import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    ${Textarea()}
    ${Button({ id: 'publish', title: 'Publish' })}
    `;

  return template;
}

export default feed;

// location.hash = "#Feed";