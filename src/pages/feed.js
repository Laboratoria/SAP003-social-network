import Button from '../components/button.js';
import Post from '../components/post.js';

function SignOut () {
  firebase.auth().signOut().then(function() { 
    window.location.hash = '#login'
    alert ('Agora tu saiu.') 
  })
};

function Posts() {
  //dados firebase 
  alert('Olá')
};
  

function Feed() {
  const template = `
    <h1>Feed</h1>
  ${Button({ title: 'Sair', class: 'primary-button', onClick: SignOut})}
    <h2>Post</h2>
  ${Post({ class: 'textarea', placeholder: 'Escreva aqui', type:'text'})}  
  ${Button({ title: 'Postar', class: 'primary-button', onClick: Posts})}
  `;
  
   
    return template;
};

export default Feed;