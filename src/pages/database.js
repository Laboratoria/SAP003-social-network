import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function signOut() {
  firebase.auth().signOut()
    .then(() => {
      alert('Sua sessão foi encerrada com sucesso!');
      window.location.hash = '#home';
    });
}

function sendPost() {
  const message = document.querySelector('.js-message-area').value;
  firebase.firestore().collection('feed').add({
    text: message,
    user_id: firebase.auth().currentUser.uid,
    likes: '',
    comments: [],
  })
    .then(() => {
      document.querySelector('div').innerHTML += 
      `<p>${message}</p>`;
    });
}

// function algumacoisaPost() {
//   firebase.firestore().collection('feed').get(text)
//     .then((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });
// }


function Database() {
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
    onClick: sendPost,
  })}
    <div class="post-area"></div>
    ${Button({
    class: 'signout',
    title: 'Sair',
    onClick: signOut,
  })}
    </form>
    <div ></div>
  `;

  return template;
}


export default Database;
