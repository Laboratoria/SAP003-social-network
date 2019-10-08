import Button from '../components/button.js';
import Input from '../components/input.js';

function goLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth(`${email}, ${password}`);
}

function Login() {
  const template = `
    <h1>Login</h1>
    <form>
      ${Input({
        class: 'js-email-input',
        placeholder: 'email',
        type: 'text',
      })}

      ${Input({
        class: 'js-password-input',
        placeholder: 'password',
        type: 'text',
      })}

      ${Button({
        id: 'login',
        title: 'Enviar',
        onClick: goLogin,
      })}

    </form>
  `;

  return template;
}

export default Login;
