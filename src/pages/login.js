import Button from '../components/button.js';
import Input from '../components/input.js';

window.validarLogin = (colecao, usuario) => {
  for (let i = 0; i < colecao.length; i += 1) {
    if (usuario.email === colecao[i].email
      && usuario.password === colecao[i].password) {
      return true;
    }
  }
  return false;
};

function enviarLogin() {
  const usuario = {
    emailDoCadastro: document.querySelector('.js-email-input').value,
    passwordDoCadastro: document.querySelector('.js-password-input').value,
  };

  const colecao = JSON.parse(localStorage.getItem('usuárioDoCadastro'));

  if (window.validarLogin(colecao, usuario)) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    window.location.hash = '#home';
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

// const email = document.querySelector('js-email-input').value
// const password = document.querySelector('js-password-input').value
// alert(`${email}, ${password}`);
// localStorage.setItem("auth", {email, password})
// localStorage.getItem

function Login() {
  const template = `
    <h1 class= "título-login">Login</h1>
   <form> 

   ${Input({
    class: 'js-email-input',
    placeholder: 'email',
    type: 'email',
  })}

   ${Input({
    class: 'js-password-input',
    placeholder: 'senha',
    type: 'password',
  })}

   ${Button({
    id: 'Botão',
    title: 'Enviar',
    onClick: enviarLogin,
  })}

    </form>
    <p class="mensagem-login">Não tem conta? <a href="#cadastro">Cadastre-se</a> </p>

  `;

  return template;
}

export default Login;
