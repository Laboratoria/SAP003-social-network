import Button from '../components/button.js';
import Input from '../components/input.js';

function pegarInput() {
  const usuario = JSON.parse(localStorage.getItem('arrayUsuarios'));
  const logado = {
    email: document.querySelector('.js-email').value,
    senha: document.querySelector('.js-senha').value,
  };

  console.log(logado);

  window.validaLogin = (arrayUsuarios) => {
    for (let i = 0; i < arrayUsuarios.length; i++) {
      if (logado.email === logado[i].email
        && logado.senha === logado[i].senha) {
        alert('logou!');
      } else {
        alert('não logou');
      }
    }
  };

  if (window.validaLogin(usuario, logado)) {
    localStorage.setItem('logado', JSON.stringify(logado));
    console.log(logado);
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

function logar() {
  const template = `
  <img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt="">
  <div class="container-login">
    <h1>Base Sustentabilidade</h1>
    <h3>Bem-vindo<h3>
    <div>
    <form class="form">
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
    ${Button({ title: 'Login', onClick: pegarInput })}
    </form>
    <p>Você já possui conta? Não, então <a href= "#cadastro">cadastre-se</a> aqui!</p>
    </div> 
    </div>
    <div class="img-footer">
    <img src="fotos/logo-half-2.png" alt="">
    </div>
  `;
  return template;
}

export default logar;

function locationHashChanged() {
  if (location.hash === '#home') {
    document.querySelector('main').innerHTML = logar();
  }
}
window.addEventListener('hashchange', locationHashChanged, false);
