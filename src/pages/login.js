//página de login: inpu email e senha, botão de login,
//botão google e link para cadastro

import Button from '../components/button.js';
import Input from '../components/input.js';
//import Signup from './signup.js';


function loginUser() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      localStorage.setItem('user', JSON.stringify(cred.user))
      // console.log(cred.user);
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          window.location = '#feed';
        }
      })
    })
    .catch(() => {
      const errorMessageField = document.getElementById('errorMessage')
      errorMessageField.textContent = 'email e/ou senha inválidos.';
      document.querySelector('.email-input').addEventListener('focus', () => {
        errorMessageField.textContent = '';
      })
    })
}

function Login() {
  const userLogin = `
  ${Input({
    type: 'email',
    class: 'email-input',
    placeholder: 'Email',
  })}
  ${Input({
    type: 'password',
    class: 'password-input',
    placeholder: 'Senha',
  })}
  ${Button({
    id: 'btn-log-in',
    onclick: loginUser,
    title: 'Login',
  })}
  ${Button({
    id: 'authGoogleButton',
    class: 'btn btn-lg btn-danger',
    title: 'G',
    // < i class= 'fa fa-google fa-2x'></i>
  })}
  `;
  const template = `
  
  <h1>Horta Urbana</h1> 
  <form>
  ${userLogin}
  <div id="errorMessage"></div>
  <p>Ainda não é membro?</p> <a href='#signup'>Cadastre-se</a>
  </form>
  `;
  return template;
}

export default Login;
