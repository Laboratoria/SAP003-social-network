import Button from './button.js';
import Input from './input.js';

function Register() {
  return `<form>
    ${Input({
    id: 'email',
    class: 'primary-input',
    type: 'email',
    placeholder: 'E-mail',
  })}
  ${Input({
    id: 'password',
    class: 'primary-input',
    type: 'password',
    placeholder: 'Senha',
  })}
  ${Button({
    id: 'send',
    class: 'primary-button',
    title: 'Registre-se',
  })}
    </form>`;
}

export default Register;
