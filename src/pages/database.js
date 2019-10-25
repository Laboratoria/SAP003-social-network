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
  const userEmail = firebase.auth().currentUser.email;
  const message = document.querySelector('.js-message-area').value;
  const userId = firebase.auth().currentUser.uid;
  
  
    firebase.firestore().collection('feed').add({
    text: message,
    user_id: userId,
    user_email: userEmail,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
  })
  .then((docRef) => {
    document.querySelector('.js-message-area').value = '';
    document.querySelector('.post-area').insertAdjacentHTML('afterbegin',
    `<li class='linha-post' style=list-style-type:none 
    data-id=>${userEmail}
    <br>${new Date().toLocaleString('pt-BR')}
    <br>${message}
      ${window.button.component({
      dataId: docRef.id,
      class: 'delete',
      title: '🗑',
      onClick: window.Delete,
    })}
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
      `<li class='post-template' style=list-style-type:none>
      
      ${doc.data().user_email}
      <br>${doc.data().timestamp.toDate().toLocaleString('pt-BR')}
      <br>${doc.data().text}
      ${Button({ 
        dataId: doc.id,
        class: 'btn-delete',
        title: '🗑',
        onClick: Delete,
      })}</li>`
  })

  const template = `
  <form class="form-timeline">
  <h1 class="page-title">Timeline</h1>
  ${Textarea({
    class: 'js-message-area message-post',
    placeholder: 'Digite sua mensagem',
    type: 'textarea',
  })}
  ${Button({
    class: 'btn-post',
    title: 'Postar',
    onClick: sendPost,
  })}
  <ul class="post-area">${postTemplate}</ul>
  ${Button({
    class: 'btn-signout',
    title: 'Sair',
    onClick: signOut,
  })}
  </form>
  `;

  return template;
}

window.Delete = Delete;


export default Database;