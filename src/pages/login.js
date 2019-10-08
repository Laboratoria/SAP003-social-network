import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  const template = `
    <h1>InstaHealth</h1>
    <form>
      ${Input({
        class: 'input-email',
        placeholder: 'email',
        type: 'email'
      })}

      ${Input({
        class: 'input-password',
        placeholder: 'password',
        type: 'password'
      })}

    ${Button({ id: '🎉', title: 'Entrar 🎉' })}
    </form>
  `;

  return template;
}

export default Login;