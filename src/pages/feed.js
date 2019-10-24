import Button from '../components/button.js';
import Post from '../components/post.js';


function signOut() {
  firebase.auth().signOut().then(() => {
    window.location.hash = '#login';
    alert('Agora tu saiu.');
  });
}

function profile() {
  window.location.hash = '#profile';
}

function AddPostToFirebase() {
  const dataBase = firebase.firestore();
  const id = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.displayName;
  const textInput = document.querySelector('.textarea').value;
  const post = {
    timestamp: new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    name,
    text: textInput,
    likes: 0,
    comments: [],
    user_id: id,
  };
  dataBase.collection('posts').add(post)
    .then((docRef) => {
      document.querySelector('.timeline').insertAdjacentHTML('afterbegin', `
      <li class='postMessage' data-id='${docRef.id}'>
      ${post.timestamp}
      ${post.name}
      ${post.text}<br>
      ${post.likes}
      ${post.comments}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: '🗑️',
        onClick: window.feed.deletePost,
      })}
      ${window.button.component({
        dataId: docRef.id,
        class: 'primary-button',
        title: '✏️',
        onClick: window.feed.editPost,
      })}
      </li> 
      `)
    });
}

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
}

function editPost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).update();
  event.target.parentElement.add();
}

function loadFeed () {
  firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((post) => {
      const postsFeed =  `<li data-id='${post.id}' class='postMessage'>
      ${post.data().timestamp}
      ${post.data().name} disse: <br>
      ${post.data().text}<br>
      ${post.data().likes}
      ${Button({
    dataId: post.id,
    class: 'primary-button',
    title: '🗑️',
    onClick: deletePost,
  })}
      ${Button({
      dataId: post.id,
      class: 'primary-button',
      title: '✏️',
      onClick: editPost,
  })}
  </li>
    </div>
  `;
  document.querySelector('.timeline').innerHTML += postsFeed;
      });
    });
}

function loadCard () {
  firebase.firestore().collection('persona').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((persona) => {
      const cardFeed =  `<li data-id='${persona.id}' class=''>
      ${persona.data().name} <br>
      ${persona.data().profession}
  </li>
    </div>
  `;
  document.querySelector('.card').innerHTML = cardFeed;
      });
    });
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
      ${post.likes}
      ${Button({  dataId: post.id, class: 'primary-button', title: '🗑️', onClick: deletePost,})}
      </li>
    `;
  });

  window.feed.loadFeed();
  window.feed.loadCard();
  const template = `
  <header class='header'>
    <h1><img class='logo-feed' src='logo1.png'/></a></h1>
    <nav>
        <li class="left">${Button({ class: 'left',
        title: 'Encerrar Sessão',
        onClick: signOut,
      })}</li>
      <li class="right">${Button({ class: 'right',
          title: `${name}`,
          onClick: profile,
      })}</li>
    </nav>
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
  <ul class= 'timeline'>${postsLayout}</ul>
  <ul class= 'card'>${postsLayout}</ul>
  `;

  return template;
}

window.feed = {
  deletePost,
  editPost,
  loadFeed,
  AddPostToFirebase,
  loadCard
};

export default Feed;
