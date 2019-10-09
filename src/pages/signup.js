//página de cadastro: input nome, email e senha e botão de cadastro
import Button from '../components/button.js';
import Input from '../components/input.js';

function newUser() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  console.log('tada' + name + password);
  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
    });
}

function Signup() {
  const template = "<h1>Bem vindo(a)!</h1><p>Para realizar o cadastro, preencha as informações abaixo:</p><form>" + Input({ type: 'text', class: 'name-input', placeholder: 'Nome' }) + Input({ type: 'email', class: 'email-input', placeholder: 'Email' }) + Input({ type: 'password', class: 'password-input', placeholder: 'Senha' }) + "<p class='error'></p>" + Button({ id: 'btn-new-user', onclick: newUser, title: 'Cadastrar' }) + "</form>";

  return template;
}

export default Signup;