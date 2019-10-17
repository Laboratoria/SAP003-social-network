/* eslint-disable indent */
import Button from '../components/button.js';
import Input from '../components/input.js';
import Div from '../components/div.js';
//import Div from '../components/div.js';
//import Card from '../components/card.js';

function Feed() {
  const template = `
    <h1>Rede Social</h1>
    ${Input({
    class: 'post-input',
    type: 'text'
  }) +
    Button({
      title: 'enviar',
      onClick: loadData
    }) +
    Div({
      class: 'insert-post'
    })}`;

  return template;
}


function loadData() {
  const postlist = document.querySelector('.post-input').value;
  //cria coleção de post no firebase/ ''post' representa o objeto que será criado no banco de dados firebase storage
  firebase.firestore().collection('post').add({
    text: postlist,
    userID: firebase.auth().currentUser.uid,
    //método JS para pegar a data 
    addeAt: (new Date()).toISOString(),
  }).then(result => alert('oi'))
  document.querySelector  ('insert-post').innerHTML = text;
}

function addPost(post) {
  const postTemplate = `<li>
    ${post.data().text}
    </li>
    `
    document.querySelector('.insert-post').innerHTML += postTemplate;
}

const loadPost = () => {
  const postCollection = firebase.firestore().collection('post');
  postCollection.get().then(snap => {
    snap.forEach(post => {
      addPost(post)
    })
  })
}


loadPost()


export default Feed;