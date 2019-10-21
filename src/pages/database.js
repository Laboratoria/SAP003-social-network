import Button from '../components/button.js';
import Input from '../components/input.js';

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

// function showPost () {
//   firebase.firestore().collection('mensagens').get()
//   .then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//     (doc.data())
//     });
//   });
// }

function Database() {
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
    onClick: sendPost,
  })}
    ${Button({
    id: 'signout',
    title: 'Sair',
    onClick: signOut,
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
