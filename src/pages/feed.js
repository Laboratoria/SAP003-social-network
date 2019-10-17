import Button from '../components/button.js';
import Textarea from '../components/textarea.js';


function Feed(props) {
loadPost()
  const template =`
    <form id ="formPost">
    ${Textarea({ class: 'Text1', placeholder: ''})}
    ${Button({ class: 'mytext', onclick:formPost, title: 'ENVIAR' })}
    </form>
    <ul id="posts"></ul>
    `
    return template;
  }

  //essa percorre os posts do template e carrega eles
  function loadPost () {
    const loading = document.querySelector('.loading');
    loading.innerHTML=""
    const user = firebase.auth().currentUser;
    const collectionPost = firebase.firestore().collection('posts').orderBy('time', 'desc');
    collectionPost.where('user', '==', user.uid).get().then(snap => {snap.forEach(post => {
      addingPost(post);
    })
  }) 
  }
  
// essa função cria o objeto do post no banco de dados e cria o card
function formPost(){
  const id = firebase.auth().currentUser.uid
  const text = document.querySelector('.Text1').value;
  const post = {
    user: id,
    likes : 0,
    comments:[],
    text: text,
    time: new Date().toLocaleString('pt-BR'),
  }
  firebase.firestore().collection('posts').add(post)
    .then(res => {
      document.querySelector('#posts').insertAdjacentHTML ('afterbegin', `
      <div class='card-post'>
      ${post.text}
      ${post.likes}
      ${post.time}
      </div>
      `)
    })
}
  
// esta busca os posts do banco de dados e adiciona no template
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


export default Feed;
