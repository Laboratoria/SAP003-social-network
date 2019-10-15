/* eslint-disable */

import Button from '../components/button.js';
import Input from '../components/input.js';

function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;

  const dados = JSON.parse(localStorage.getItem('cadastro'));
  const logado = dados.reduce(d => {
    if (d.email === email && d.senha === senha) {
      return d;
    }
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

function logout() {
  localStorage.removeItem('usuario');

  window.location.reload();
}

function Login() {
  const template = `
    <h1 id="title">Home Page</h1>
    <p><a href= "#cadastro">Cadastre-se</a></p> 
    <form>
      ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
      ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
      ${Button({ id: '🎉', title: 'Login', onClick: pegarInput })}
      ${Button({ id: '🎉', title: 'Logout', onClick: logout })}
    </form>
    `;
  return template;
}

export default Login;
