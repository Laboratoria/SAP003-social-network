import Button from '../components/button.js';
import Input from '../components/input.js';

function Feed() {
  const template = `
    ${Input({
      class: 'post-input',
      placeholder: 'Escreva aqui',
      type: 'text',
    })}
    ${Button({
      id: 'postar',
      title: 'Clica aqui',
      onClick: oi
    })}
  `;   
  
  return template;
}

function oi(){
  console.log('oi')
}


// function formSubmit(event) {
//     event.preventDefault()
// const textInput = document.querySelector('.post-input');
// const post = {
//     likes: 0,
//     comments:[],
//     text: textInput.value,
//     user_id: "nomeexemplo"
// }

// firebase.firestore().collection("posts").add(post).then(res =>{
//     textInput.value = "";
//    //loadData()
// }
// )}
  
  export default Feed;