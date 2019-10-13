import Button from '..//components/button.js';
import Logo from '../components/logo.js';


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
    <h3>Olá! Bem-vinda ao seu aplicativo de trocas ;)</h3>  

    <p>OiOiOi</p>  
      
    <br>

    ${Button({ title: 'SAIR', onClick: signOut })}   
   
    
  `;

  return template;
}

export default home;
