import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function Feed() {
  location.hash = "#Feed";
  const template = `
    <img src="../../imagens/logo.png"></img>
    ${Textarea()}
    ${Button({ id: 'publish', title: 'Publish' })}
    `;

  return template;
}

export default Feed;
