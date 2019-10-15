import Button from '../components/button.js';
import Input from '../components/input.js';

export const Database = () => {
  const template = `
    <h1>Post</h1>
    <form>
    ${Input({
    class: 'js-message-area',
    placeholder: 'Digite sua mensagem',
    type: 'textarea',
    })}
    ${Button({
    id: 'post',
    title: 'Postar',
    onClick: Post,
    })}
    </form>
  `;


  return template;
};


export const Post = () => {
  const message = document.querySelector('.js-message-area').value;


  console.log(message);


  return message;
};
