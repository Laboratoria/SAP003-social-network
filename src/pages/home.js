import Button from '..//components/button.js';
import savePost from '..//pages/post.js';


function signOut() {  
  firebase.auth().signOut()
  .then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
}


function home() {
  const template = `
    <header class="header-home">Laboratroca</header>   
    <nav></nav>
    <br>
    <h1 class="id-user">Olá, Fulana!</h1>  

    <img src="./img/logo.png" class="img-user"/><textarea name="post" class="post" placeholder="O que você quer trocar?"></textarea>
    <br>    
    ${Button({ title: 'PUBLICAR', onClick: savePost })}   
    <br>
    <ul class="feed">    
    </ul>      

    ${Button({ title: 'SAIR', onClick: signOut })}   
   
    
  `;  

  return template;
}

export default home;



