import Button from '../components/button.js';
import input from '../components/input.js';

function Login() {
  const template = `
    
    <figure>
    <img class="logo" src="img/Logo.png"/>
    </figure>
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
    ${Button({ class: 'google-btn', title: 'ENVIAR' })}
    <p class="register-link">Não é cadastrado? Registre-se</p>
    
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
      console.error(error.code);
      console.error(error.message);
      alert('falha ai');
  } )
}


export default Login;