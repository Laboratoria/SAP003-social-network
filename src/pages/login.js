import Button from '../components/button.js';
import Input from '../components/input.js';

window.validarLogin = (colecao, usuario) => {
  // console.log(colecao)
  for (let i = 0; i < colecao.length; i += 1) {
    if (usuario.emailDoCadastro === colecao[i].email
      && usuario.passwordDoCadastro === colecao[i].password) {
      return colecao[i].id;
    }
  }
  return false;
};

function enviarLogin() {
  const usuario = {
    emailDoCadastro: document.querySelector('.js-email-input').value,
    passwordDoCadastro: document.querySelector('.js-password-input').value,
  };

  const colecao = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  if (usuario.emailDoCadastro && usuario.passwordDoCadastro) {

    if (window.validarLogin(colecao, usuario)) {
      const id = window.validarLogin(colecao, usuario)
      localStorage.setItem('usuarioLogado', JSON.stringify(id));
      window.location.hash = '#home';
    } else {
      window.alert('E-mail ou senha inválidos');
    }

  } else {
    window.alert('Preencha e-mail e senha');
  }

}

// const email = document.querySelector('js-email-input').value
// const password = document.querySelector('js-password-input').value
// alert(`${email}, ${password}`);
// localStorage.setItem("auth", {email, password})
// localStorage.getItem

function Login() {
  const template = `
  
  <div class="container-login">
  <img src="engre5.png" alt="">
  <h1 class= "título-login">Escamb</h1>
  <h3> Bem-vindo(a)!</h3>
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
    </div>

  `;

  return template;
}

export default Login;
