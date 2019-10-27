import Button from '../components/button.js';
import Post from '../components/post.js';

function signOut() {
    firebase.auth().signOut().then(() => {
        window.location.hash = '#login';
        alert('Encerrada a Sessão');
    });
}

function profile() {
    window.location.hash = '#profile';
}

function AddPostToFirebase() {
    const dataBase = firebase.firestore();
    const id = firebase.auth().currentUser.uid;
    const name = firebase.auth().currentUser.displayName;
    const textInput = document.querySelector('.textarea');
    const post = {
        timestamp: new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        name,
        text: textInput.value,
        comments: [],
        user_id: id,
    };
    dataBase.collection('posts').add(post)
        .then((docRef) => {
            document.querySelector('.timeline').insertAdjacentHTML('afterbegin', `
    <li class='postMessage' data-id='${docRef.id}'>
    <div class='postHeader'>${post.timestamp}</div>
    <div class='postHeader'>${post.name} disse:</div>
    <div id='post_${docRef.id}'>${post.text}</div>
    ${post.comments}
    ${window.button.component({
      dataId: docRef.id,
      class: 'primary-button',
      title: '🗑️',
      onClick: window.feed.deletePost,
    })}
    ${window.button.component({
      id: 'edit-'+docRef.id,
      dataId: docRef.id,
      class: 'primary-button',
      title: '✏️',
      onClick: window.feed.editPost
    })}
    </li> `)
        });
        window.feed.cleanPost()
}

function deletePost(event) {
    const id = event.target.dataset.id;
    firebase.firestore().collection('posts').doc(id).delete();
    event.target.parentElement.remove();
}

function editPost(event) {
    const id = event.target.dataset.id;
    document.getElementById('post_' + id).contentEditable = true;
    document.getElementById('post_' + id).style.border = '1px solid black';
    document.querySelector('#edit-' + id).innerHTML = '✔️';
    document.querySelector('#edit-' + id).addEventListener('click', window.feed.saveEdit);
}

function saveEdit() {
    const id = event.target.dataset.id;
    document.getElementById('post_' + id).contentEditable = false;
    document.getElementById('post_' + id).style.border = '';
    document.querySelector('#edit-' + id).innerHTML = '✏️';
    const text = document.querySelector('#post_' + id).textContent;
    const timestamp = new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    firebase.firestore().collection('posts').doc(id).update({ text, timestamp });
    document.querySelector('#edit-' + id).removeEventListener('click', window.feed.saveEdit);
}

function loadFeed() {
    firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((post) => {
                const postsFeed = `<ul data-id='${post.id}' class='postMessage'>
      <li class='postHeader'>${post.data().timestamp} - ${post.data().name} disse: </li>
      <li id='post_${post.id}'>
      ${post.data().text} </li>
      ${Button({
        dataId: post.id,
        title: '🗑️',
        class: 'primary-button',
        onClick: deletePost,
      })}
      ${Button({
        id: 'edit-'+post.id,
        dataId: post.id,
        title: '✏️',
        class: 'edit-btn primary-button',
        onClick: editPost,
      })}
      </ul>`;
                document.querySelector('.timeline').innerHTML += postsFeed;
            });
        });
}

function loadCard () {
  const id = firebase.auth().currentUser.uid;
  firebase.firestore().collection('persona').get().then((querySnapshot) => {
    querySnapshot.forEach((persona) => {
      const user = `${persona.data().user_id}`;
      if (user == id){
        const cardFeed = `<li data-id='${persona.id}' class='card'>
        <img src='${persona.data().photo}' width='60px' height='60px'/><br>
        ${persona.data().name} <br>
        ${persona.data().profession}<br>
    </li>`
    document.querySelector('.cardProfile').innerHTML = cardFeed;
      }
    });
  });
}

function cleanPost (){
  document.querySelector('.textarea').value = '';
}

function Feed(props) {
    const name = firebase.auth().currentUser.displayName;
    let postsLayout = '';
    props.posts.forEach((post) => {
        postsLayout += `
      <li  class='postMessage' data-id='${post.id}'>
      ${post.name}
      ${post.timestamp}<br>
      ${post.text}<br>
      ${Button({  dataId: post.id, class: 'primary-button', title: '🗑️', onClick: deletePost,})}
      </li>
    `;
    });

    window.feed.loadFeed();
    window.feed.loadCard();

    const template = `
    <header class='header'>
      ${Button({ class: 'right',
      title: `${name}`,
      onClick: profile,
      })}
      <img class='logo-feed' src='logobranco.png'/>
      ${Button({ class: 'left',
      title: '🚪Sair',
      onClick: signOut,
      })}
      </header>
  <div class='post'>
  ${Post({
    class: 'textarea',
    id: 'post-textarea',
    placeholder: 'Escreva aqui',
    type: 'text',
  })}
  ${Button({
    title: 'Postar',
    class: 'primary-button',
    onClick: AddPostToFirebase,
  })}
  <div>
  <ul class= 'cardProfile'></ul>
  <ul class= 'timeline'>${postsLayout}</ul>
  `;
  return template;
}

window.feed = {
  deletePost,
  editPost,
  loadFeed,
  AddPostToFirebase,
  loadCard,
  saveEdit,
  profile,
  cleanPost
};

export default Feed;
