//página de login: inpu email e senha, botão de login,
//botão google e link para cadastro

import Button from '../components/button.js';
import Input from '../components/input.js';

function loginUser() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  console.log('Entrou!!!!!!' + name + password);
  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
    });
}

function signIn(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const token = result.credential.accessToken;
      displayName.innerText = 'Bem vindx, ' + result.user.displayName;
    }).catch((error) => {
      console.log(error);
      alert('Falha na autenticação');
    });
}

function loginGoogleUser() {
  const provider = new firebase.auth.GoogleAuthProvider();
  signIn(provider);
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
    class: 'btn btn-lg btn-danger fa fa-google fa-2x',
    onclick: loginGoogleUser,
    title: 'G',
    // < i class= 'fa fa-google fa-2x'></i>
  })}
  `;
  const template = `
  <h1>Horta Urbana</h1> 
  <form>
  ${userLogin}
  <p>Ainda é membro? <a href='#'>Cadastre-se</a></p>
  </form>
  `;
  return template;
}
export default Login;
window.signIn = signIn;