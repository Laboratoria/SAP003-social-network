import Input from '../components/input.js';
import Button from '../components/button.js';


function pegarInput() {
  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
  };
  window.localStorage.setItem('usuario', JSON.stringify(dados));

  // const email = document.querySelector('.js-email').value;
  // const nome = document.querySelector('.js-nome').value;
  // const senha = document.querySelector('.js-senha').value;
  // localStorage.setItem('emailSalvo', email);
  // localStorage.setItem('nomeSalvo', nome);
  // localStorage.setItem('senhaSalvo', senha);
}
function voltar(){
  window.location.hash = '#home';
}

function Cadastro() {
  const template = `
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}
    ${Button({ title: 'Voltar', onClick: voltar })}

  `;
  return template;
}

function locationHashChanged() {
  if (location.hash === "#cadastro") {
    document.querySelector('main').innerHTML = Cadastro();

  }else if (location.hash === '#home'){
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener("hashchange", locationHashChanged, false);

export default Cadastro;
