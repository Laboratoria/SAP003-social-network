import Button from '../components/button.js';
import Input from '../components/input.js';

function sendLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  alert(`${email}, ${password}`);
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
      class: 'js-password-input ',
      placeholder: 'password',
      type: 'password',
    })}
      ${Button({
      id: '🎉',
      title: 'Enviar',
      onClick: sendLogin,
    })}
  </form>
  `;
  return template;
}
export default Login;