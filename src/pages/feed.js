import Button from '../components/button.js';
import Post from '../components/post.js';
//import PostList from '../components/post-list.js';

function SignOut () {
  firebase.auth().signOut().then(function() {
    window.location.hash = '#login'
    alert ('Agora tu saiu.')
  })
};

function Feed() {
  const template = `
  <h1>Feed</h1>
  ${Button({ title: 'Sair', class: 'primary-button', onClick: SignOut})}
  <h2>Post</h2>
  ${Post({ class: 'textarea', id: 'post-textarea', placeholder: 'Escreva aqui', type:'text'})}
  ${Button({ title: 'Postar', class: 'primary-button', onClick: Posts})}
  <div id='banana'></div>
  `;
  return template;
};

function Posts() {
  const dataBase = firebase.firestore();
  const textInput = document.querySelector('.textarea');
  const post = {
    timestamp: new Date().toLocaleDateString('pt-BR') + ':' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    text: textInput.value,
    likes: 0,
    coments: [],
    user_id: firebase.auth().currentUser.uid
  }
  console.log(post);
  dataBase.collection('posts').add(post)
  .then(function loadFeed(post) {
    document.getElementById('banana').innerHTML='Carregando...';
    dataBase.collection('posts').orderBy('timestamp', 'desc').get().then((snap) => {
      document.getElementById('banana').innerHTML='';

      snap.forEach((post) => {
        const postTemplate = `
        <section class='postMessage' id='${post.id}'>
        ${post.data().timestamp}:
        ${post.data().user_id}
        ${post.data().text}
        ${post.data().likes}
        </section>
        `;
        document.getElementById('banana').innerHTML += postTemplate;

      });
    });
  }
)

};

window.feed = {
}

export default Feed;
