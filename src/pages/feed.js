import Button from '../components/button.js';

function Feed() {
  const template =`
    <form action ="" id ="formPost">
    <textarea class='Text1' placeholder=''></textarea>
    <p class="login"></p>
    ${Button({ class: 'mytext', onclick: myText, title: 'ENVIAR' })}
    </form>
    <ul> id="posts"</ul>
    `;
    return template;
  }
  
  function myText() {
    const textArea = document.querySelector('.Text1').value;
    document.querySelector('.login').innerHTML = textArea;
  }

   export default Feed;

document.querySelector('.mytext').addEventListener('click',formPost)

function formPost(event){
  event.preventDefault();
  const text = document.querySelector('.text1').value;
  const post = {
    likes : 0,
    comments:[],
    text:text.value,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }
  firebase.firestore().collection('#posts').add(post).then(res => {
    text.value =""
    Post()
  })
}
  
function Post(){
  const listPost = document.querySelector('#posts');
  const collectionPost = firebase.firestore().collection('#posts')
  listPost.innerHTML="Carregando..."
  collectionPost.orderBy('timestamp').get().then(snap => {
  listPost.innerHTML=""
    snap.forEach(post => {
      console.log(post.data())
      addingPost(post)
    })
  })
}

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

