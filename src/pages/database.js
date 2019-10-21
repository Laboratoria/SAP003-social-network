import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function signOut() {
  firebase.auth().signOut()
    .then(() => {
      alert('Sua sessão foi encerrada com sucesso!');
      window.location.hash = '#home';
    })
    .catch((error) => {
    });
}

function sendPost() {
  const message = document.querySelector('.js-message-area').value;
  firebase.firestore().collection('feed').add({
    text: message,
    user_id: firebase.auth().currentUser.uid,
    likes: '',
    comments: [],
  });
}

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


function Database() {
  const template = `
    <h1 class="titulo">Post</h1>
    <form>

    ${Input({
    class: 'js-message-area',
    placeholder: 'Digite sua mensagem',
    type: 'textarea',
  })}
    ${Button({
    id: 'post',
    title: 'Postar',
    onClick: sendPost,
  })}
    ${Button({
    id: 'signout',
    title: 'Sair',
    onClick: signOut,
  })}

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
}


export {
  signOut,
  sendPost,
  // showPost,
  Database,
};






