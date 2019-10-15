import Button from '../components/button.js';

function Feed() {
  const template =`
    <form action ="" id ="formPost">
    <textarea class='Text1' placeholder=''></textarea>
    <p class="login"></p>
    ${Button({ class: 'mytext', onclick: formPost, title: 'ENVIAR' })}
    </form>
    <ul id="posts"></ul>
    `;
    return template;
  }
  

function formPost(){
  const text = document.querySelector('.Text1');
  const post = {
    likes : 0,
    comments:[],
    letters: text.value,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }
  firebase.firestore().collection('posts').add(post).then(res => {
    tex.value = "";
  })
}

/* 
function Post(){
  const listPost = document.querySelector('#posts');
  const collectionPost = firebase.firestore().collection('posts');
  listPost.innerHTML= "Carregando..."
  collectionPost.get().then(snap => {
  listPost.innerHTML=""
    snap.forEach(post => {
      addingPost(post);
    }
)*/

function addingPost(post){
  const listPost = document.querySelector('#posts');
  const templatePost = `
  <li>
  ${post.data().timestamp.toDate().toLocaleString('pt-BR')}:
  ${post.data().text}
  ${post.data().likes}
  </li>
  `
  listPost.innerHTML += templatePost

}





export default Feed