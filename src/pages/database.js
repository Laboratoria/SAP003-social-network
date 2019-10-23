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
  const userId = firebase.auth().currentUser.uid;
  firebase.firestore().collection('feed').add({
    text: message,
    user_id: userId,
    likes: '',
    comments: [],
  })
  .then((docRef) => {
    document.querySelector('.post-area').insertAdjacentHTML('afterbegin', 
    `<li style=list-style-type: none data-id=>${message}
    <div class= 'delete'>${window.button.component({ 
      dataId: docRef.id,
      class: 'delete',
      title: 'x',
      onClick: window.Delete,
    })}</div>
    </li>`
    );
  });
}

function Delete(event){
  const id= event.target.dataset.id;
  firebase.firestore().collection('feed').doc(id).delete()
  event.target.parentElement.remove();
  
}

function Database(props) {
  let postTemplate = "";
  props.feed.forEach((doc) => {
    postTemplate+=
      `<li class= 'linha'>${doc.data().text} 
      ${Button({ 
        dataId: doc.id,
        class: 'delete',
        title: 'x',
        onClick: Delete,
      })}</li>`
  })

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
  <ul class="post-area">${postTemplate}</ul>
  ${Button({
    class: 'signout',
    title: 'Sair',
    onClick: signOut,
  })}
  </form>
  `;

  return template;
}

window.Delete = Delete;


export default Database;