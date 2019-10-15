import Button from '../components/button.js';
import Input from '../components/input.js';

function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  const dados = JSON.parse(localStorage.getItem('cadastro'));
  const logado = dados.reduce((d) => {
    if (d.email === email && d.senha === senha) {
      return d;
    }
    return pegarInput;
  });

  if (logado) {
    localStorage.setItem('usuario', JSON.stringify(logado));
    const paragraph = document.createElement('p');
    const node = document.createTextNode(`Bem-vindo ${logado.nome}`);
    paragraph.appendChild(node);
    document.getElementById('title').appendChild(paragraph);
  } else {
    console.log('Ocorreu um erro :(');
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

/* function locationHashChanged() {
  if (location.hash === '#home') {
    document.querySelector('main').innerHTML = logar();
  }
}
window.location.hash = '#home';
window.addEventListener('hashchange', locationHashChanged, false); */

/* Função logout para por no feed
 function logout() {
  localStorage.removeItem('usuario');
  ${Button({ title: 'Login', onClick: logout })}
  window.location.reload();
}
 */
