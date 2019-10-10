import Button from '../components/button';
import Logo from '../components/logo';


function sair() {  
  firebase.auth().signOut();
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
