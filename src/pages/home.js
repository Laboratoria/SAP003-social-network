import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function Feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    ${Textarea()}
    ${Button({ id: 'publish', title: 'Publish' })}
    `;

  return template;
}

export default Feed;

// location.hash = "#Feed";