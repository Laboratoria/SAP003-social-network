import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

export const Post = () => {
  const message = document.querySelector('.js-message-area').value;
  firebase.firestore().collection('posts').add({message})
 
};

export const Feed = () => {
  firebase.firestore().collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data())
      
    });
  });
  
};

export const Database = () => {
  const template = `
    <h1 class="titulo">Post</h1>
    <form>
    ${Textarea({
      class: 'js-message-area message-post',
      placeholder: 'Digite sua mensagem',
      type: 'textarea',
    })}
    ${Button({
      class: 'post',
      title: 'Postar',
      onClick: Post,
    })}
    </form>
    <div ></div>
  `;

  return template;
};





