import Button from '../components/button.js';
import Input from '../components/input.js';
import Card from '../components/card.js';

function botaoFeliz() {
  alert('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
}

function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      if (user) {
        window.location.hash = '#home';
      }
    });
}

function Login() {
  const quadradoVerde = `
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'text',
    })}
            ${Input({
      class: 'js-password-input bordinha-redonda',
      placeholder: 'password',
      type: 'password',
    })}
            ${Button({
      id: '🎉',
      title: 'Cadastrar',
      onClick: enviarLogin,
    })}
            ${Button({
      id: '🎉',
      title: 'Botão 🎉',
      onClick: botaoFeliz,
    })}
  `;

  const template = `
    <h1>Login</h1>
    <form>
      ${Card({
        children: quadradoVerde,
      })}
    </form>
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Login;
