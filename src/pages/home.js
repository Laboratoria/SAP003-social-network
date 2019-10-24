import Button from '../components/button.js';
import Input from '../components/input.js';


function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  const dados = JSON.parse(localStorage.getItem('cadastro'));
  const logado = dados.filter((d) => {
    if (d.email === email && d.senha === senha) {
      return d;
    }
    return null;
  })[0];

  if (logado) {
    localStorage.setItem('usuario', JSON.stringify(logado.id));
    window.location.hash = '#feed';
    return true;
  }
  document.getElementById('erro').innerHTML = 'Usuario ou senha invalido!';
  return false;
}


function logar() {
  const template = `
<img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt="">
<div class="container-login">
  <h1 id="title">Base Sustentabilidade</h1>
  <h3>Bem-vindo<h3>
  <p id="erro" class="erro"></p>
  <div>
  <form class="form">
  ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
  ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
  ${Button({ title: 'Login', onClick: pegarInput })}
  </form>
  <p>Você já possui conta? Não, então <a href= '#cadastrar'>cadastre-se</a> aqui!</p>
  </div> 

  </div>
  <div class="img-footer">
  <img src="fotos/logo-half-2.png" alt="">
  </div>
`;
  return template;
}

// window.home = {
//   dados: JSON.parse(localStorage.getItem('cadastro'))
// };

export default logar;
