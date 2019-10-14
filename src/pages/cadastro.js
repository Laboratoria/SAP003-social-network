import Input from '../components/input.js';
import Button from '../components/button.js';

function pegarInput() {
  const novosdados = [];
  const dadosvazios = null;
  const dadoslocal = localStorage.getItem('cadastro');
  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
  };
  if (dadoslocal === dadosvazios) {
    novosdados.push(dadoslocal);
  } else if (dadoslocal !== dadosvazios) {
    novosdados.push(dados);
    console.log(novosdados);
  }
  // const itens = JSON.parse(localStorage.getItem('usuario')) || [];
  // itens.push(dados);
  window.localStorage.setItem('cadastro', JSON.stringify(novosdados));

  // const email = document.querySelector('.js-email').value;
  // const nome = document.querySelector('.js-nome').value;
  // const senha = document.querySelector('.js-senha').value;
  // localStorage.setItem('emailSalvo', email);
  // localStorage.setItem('nomeSalvo', nome);
  // localStorage.setItem('senhaSalvo', senha);
}

function Cadastro() {
  const template = `
  <h1><a href='#login'>Login</a></h1>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}

  `;
  return template;
}

function locationHashChanged() {
  if (location.hash === "#cadastro") {
    document.querySelector('main').innerHTML = Cadastro();
  } else if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener("hashchange", locationHashChanged, false);

export default Cadastro;
