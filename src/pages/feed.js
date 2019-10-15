import Button from '../components/button.js';

function Feed(posts) {
  posts.forEach()
  const loading = document.querySelector('.loading');
  loading.innerHTML= "Carregando..."

  // collectionPost.get().then(snap => {
  //   console.log("SEGUNDO")
  //   loading.innerHTML= ""
  // // listPost.innerHTML=""
  //   // snap.forEach(post => {
  //   // addingPost(post)
  //   // })
  // });

  const template =`
    <form id ="formPost">
    <textarea class='Text1' placeholder=''></textarea>
    <p class="login"></p>
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
    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }
  firebase.firestore().collection('posts').add(post).then(res => {
    // text.value
    // Post(res)
  })
}
  
 /*function Post(){
   const listPost = document.querySelector('#posts');
   const collectionPost = firebase.firestore().collection('posts')
   listPost.innerHTML= "Carregando"
   collectionPost.get().then(snap => {
     console.log(snap)
     listPost.innerHTML=""
     snap.forEach(post => {
     addingPost(post)
     })
   })
 }*/

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

export default Feed;
