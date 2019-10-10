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

function Login() {
  // const template = "<h1>Horta Urbana</h1> <form>" + Input({ type: 'email', class: 'email-input', placeholder: 'Email' }) + Input({ type: 'password', class: 'password-input', placeholder: 'Senha' }) + Button({ id: 'btn-log-in', onclick: loginUser, title: 'Login' }) + "<button class='btn btn-lg btn-danger' id='authGoogleButton'><i class='fa fa-google fa-2x'></i></button></form><p>Ainda é membro? <a href='#'>cadastre-se</a></p>";
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
  <p>Ainda não é membro? <a href='#signup'>Cadastre-se</a></p>
  </form>
  `;
  return template;
}

export default Login;


function locationHashChanged(){
  if (location.hash ==='#signup') {
    document.querySelector('main').innerHTML = Signup();
  } 
}

window.addEventListener("hashchange", locationHashChanged, false);