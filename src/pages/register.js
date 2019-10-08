import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  const template = `
    <h1>Registre-se!</h1>
    <form>
    ${Input({ type: 'text', class: 'js-name-register', placeholder: 'Digite seu nome' })}
    ${Input({ type: 'date', class: 'js-date-register', placeholder: 'Digite seu nascimento' })}
    ${Input({ type: 'email', class: 'js-email-register', placeholder: 'Digite seu e-mail' })}
    ${Input({ type: 'password', class: 'js-password-register', placeholder: 'Digite a senha' })}

    ${Button({ class: 'js-btn-register', title: 'Registrar', id: 'btn-register' })}
    
    </form>
  `;
  return template;
}

export default Register;
