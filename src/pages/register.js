import Button from '../components/button.js';
import Input from '../components/input.js';

function createUserWithEmailAndPassword() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registered) => {
      alert(`Bem vindo ${email}`);
      window.location.hash='#newpage';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Falha ao cadastrar ou usuário já cadastrado`);
      window.location.hash='#register';
    });
}

function Register() {
  const template = `
    <h1>Cadastro</h1>
    ${Input({
    class: 'js-email-input',
    placeholder: 'Email',
    type: 'email',
  })}
    ${Input({
    class: 'js-password-input',
    placeholder: 'Senha',
    type: 'password',
  })}
  <br>
  <br>
    ${Button({
    id: 'createAccount',
    title: 'Cadastre-se',
    onClick: createUserWithEmailAndPassword,
  })}
`;
  return template;
}

export default Register;
