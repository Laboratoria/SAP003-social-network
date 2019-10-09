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
  const template = "<h1>Horta Urbana</h1> <form>" + Input({ type: 'email', class: 'email-input', placeholder: 'Email' }) + Input({ type: 'password', class: 'password-input', placeholder: 'Senha' }) + Button({ id: 'btn-log-in', onclick: loginUser, title: 'Login' }) + "<button class='btn btn-lg btn-danger' id='authGoogleButton'><i class='fa fa-google fa-2x'></i></button></form><p>Ainda é membro? <a href='#'>cadastre-se</a></p>";
  return template;
}

export default Login;