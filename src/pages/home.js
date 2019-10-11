import Button from '..//components/button.js';
import Logo from '../components/logo.js';


function signOut() {  
  firebase.auth().signOut().then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
}


function Home() {
  const template = `   
    ${Logo()}
    <br>

    <p>OiOiOi</p>  
      
    <br>

    ${Button({ title: 'SAIR', onClick: signOut })}   
   
    
  `;

  return template;
}

export default Home;
