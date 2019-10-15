import Button from '../components/button.js';
import Input from '../components/input.js';

function feed(){
    const template = `
  <form>
       ${Input({ placeholder: 'Escreva o seu post', type: 'text'})}
       ${Button({ id: 'button', title: 'postar', type: 'submit'})}
  </form>
       `;
      return template;
  }
export default feed;

// function loadData(){
//   const postList = document.getElementsById("posts");
//   const postCollection = firebase.firestore().collection("posts")
//
//   postCollection.get().then(snap =>{
//     snap.forEach(post =>{
//       addPost(post)
//     })
//   })
// }
//
// function addPost(post){
//   const postTemplate = `
//   <li> </li>`
// }
