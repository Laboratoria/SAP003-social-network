import Button from '..//components/button.js';
import Logo from '../components/logo.js';


function sair() {  
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

    ${Button({ title: 'Sair', onClick: sair })}   
   
    
  `;

  return template;
}

export default Home;
