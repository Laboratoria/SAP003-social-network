import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function Feed(posts) {

  const loading = document.querySelector('.loading');
  const collectionPost = firebase.firestore().collection('posts');
  loading.innerHTML= "Carregando..."
  collectionPost.get().then(snap => {
    loading.innerHTML= ""
    snap.forEach(post => addingPost(post));
  });

  const template =`
    <form id ="formPost">
    ${Textarea({ class: "post-input", placeholder: ' '})}
    ${Button({ class: 'mytext', onclick:formPost,  title: 'ENVIAR' })}
    </form>
    <ul id="posts"></ul>
    `
    return template;
  }
  

function formPost(){
  const text = document.querySelector('.post-input').value;
  const post = {
    likes : 0,
    comments:[],
    text: text,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }
  firebase.firestore().collection('posts').add(post)
  }

  
function addingPost(post){
  const listPost = document.querySelector('#posts');
  const templatePost = `
  <li>
  ${post.data().timestamp.toDate().toLocaleString('pt-BR')}
  ${post.data().text}
  ${post.data().likes}
  </li>
  `
  listPost.innerHTML += templatePost
  
}

export default Feed;
