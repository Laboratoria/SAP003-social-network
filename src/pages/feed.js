import Button from '../components/button.js';
import Textarea from '../components/textarea.js';


function Feed() {

  loadPost ()
  const template =`
    <form id ="formPost">
    ${Textarea({ class: 'Text1', placeholder: ''})}
    ${Button({ class: 'mytext', onclick:formPost, title: 'ENVIAR' })}
    </form>
    <ul id="posts"></ul>
    `
    return template;
  }
  

function formPost(){
  const text = document.querySelector('.Text1').value;
  const post = {
    likes : 0,
    comments:[],
    text: text,
    time: new Date().toLocaleString('pt-BR'),
  }
  firebase.firestore().collection('posts').add(post)
    .then(res => {

      document.querySelector('#posts').innerHTML += `
      <li>
      ${post.text}
      ${post.likes}
      ${post.time}
      </li>
      `
    })
}
  
function addingPost(post){
  const listPost = document.querySelector('#posts');
  const templatePost = `
  <li>
  ${post.data().text}
  ${post.data().time}
  ${post.data().likes}
  </li>
  `
  listPost.innerHTML += templatePost
}

function loadPost () {
  const loading = document.querySelector('.loading');
  loading.innerHTML=""
   const collectionPost = firebase.firestore().collection('posts')
  collectionPost.get().then(snap => {snap.forEach(post => {
  addingPost(post)


  }) 
}) 


}
export default Feed;
