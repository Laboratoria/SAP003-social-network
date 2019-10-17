import Button from '../components/button.js';
import Post from '../components/post.js';

const dataBase = firebase.firestore();

function signOut() {
  firebase.auth().signOut().then(function () {
    window.location.hash = '#login';
    alert('Agora tu saiu.')
  })
};

function profile() {
  window.location.hash = '#perfil';
};

function Posts() {
  const dataBase = firebase.firestore();
  //const id = firebase.auth().currentUser.uid;  
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
    .then((docRef) => {
      document.querySelector('#timeline').insertAdjacentHTML('afterbegin', `
    <li data-id='${docRef.id}'>
      ${window.button.component({
        dataId: docRef.id,
        title: 'Deletar',
        onClick: window.feed.deletePost,
      })} 
      
    </li>`
      );
    }
    )

};

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
  // document.querySelector(`li[data-id='${id}']`).remove();
}


function Feed() {
  let postTemplate = '';
  //const dataBase = firebase.firestore();
 //document.getElementById('timeline').innerHTML = 'Carregando...';
 firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get().then((snap) => {
  //document.getElementById('timeline').innerHTML = '';
     
    snap.forEach((post) => {
      postTemplate += `
      <div data-id='${post.id}' class='postMessage' id='${post.id}'>
      ${post.data().timestamp}:
      ${post.data().user_id}
      ${post.data().text}
      ${post.data().likes}
      ${Button({ dataId: post.id, title: 'Deletar', onClick: deletePost })}
      </div>
      `;
      //document.getElementById('timeline').innerHTML += postTemplate;

    });

  const template = `
  <h1>Feed</h1>
  ${Button({ title: 'Sair', class: 'primary-button', onClick: signOut })}
  ${Button({ title: 'Perfil', class: 'primary-button', onClick: profile })}
   <h2>Post</h2>
  ${Post({ class: 'textarea', id: 'post-textarea', placeholder: 'Escreva aqui', type: 'text' })}
  ${Button({ title: 'Postar', class: 'primary-button', onClick: Posts })}
  <section id='timeline'>${postTemplate}</section>
  `;
  return template;
})}

window.feed = {
    deletePost
};


export default Feed;