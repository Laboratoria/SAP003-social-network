
import Input from '../components/input.js';
import Button from '../components/button.js';


function pegarInput() {
  let dadoslocal = JSON.parse(localStorage.getItem('cadastro'));

  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
    post: [],
  };

  if (!dadoslocal) {
    dadoslocal = [dados];
  } else {
    dadoslocal.push(dados);
  }
  window.localStorage.setItem('cadastro', JSON.stringify(dadoslocal));
  window.location.hash = '#home';
}

function cadastrar() {
  const template = `
  <img src="fotos/mia pose 1-01.png" class="mia"> 
  <div class="container-cadastro">
  <form class="cadastro">
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}
    <p>Você já está registrado? Então venha<a href='#home'> logar</a> e fazer parte de um mundo mais sustentável.</p>

  `;
  return template;
}

function locationHashChanged() {
  if (location.hash === '#cadastro') {
    document.querySelector('main').innerHTML = cadastrar();
  } else if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);

export default cadastrar;
