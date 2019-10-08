//página de login: inpu email e senha, botão de login,
//botão google e link para cadastro

import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  const template = `
    <h1>Horta Urbana</h1>
    ${Input({
      type: 'email',
      class:'email-input',
      placeholder: 'Email',
    })}
    ${Input({
      type: 'password',
      class:'password-input',
      placeholder: 'Senha',
    })}
    ${Button({ id: '🎉', title: 'Botão 🎉' })}
    <button id=""auth-google-btn><i class="fa fa-google fa-2x"></i></button>
    <p>Ainda é membro? <a href="#">cadastre-se</a></p>
  `;

  return template;
}

export default Login;
