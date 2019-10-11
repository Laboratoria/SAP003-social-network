import Button from '../components/button.js';
import input from '../components/input.js';




function Login() {
  const template = `
    
    <figure>
    <img class="logo" src="img/Logo.png"/>
    <div class ="welcome">Bem Vinda,</div>    
    <p class="login">Faça o login para continuar</p>
    <form>
    <h2 class="email-info">Login</h2>
    ${input({class: 'email', type: 'email'})}
    <h2 class="pass-info">Senha</h2>
    ${input({class: 'password', type: 'password'})}
    </form>
    ${Button({ class: 'send', onclick:sendLogin, title:'ENVIAR' })}
    <p class="other-login">Ou entre com</p>
    ${Button({ class: 'google-btn', onclick: googleLogin, title: 'ENVIAR' })}
    <p class="register-link">Não é cadastrado? <a href="#register">Registre-se</a></p>
    
  `;

  return template;
}


function sendLogin (){
  const emailValue = document.querySelector('.email').value;
  const passValue = document.querySelector('.password').value;
  firebase
  .auth()
  .signInWithEmailAndPassword(emailValue, passValue)
  .then(() => {
      alert('valeu');
  })
  .catch((error) => {
      console.error(error.message);
      alert('falha ai');
  } )
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
  
}




export default Login;