import Input from '../components/input.js';
import Button from '../components/button.js';

function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const nome = document.querySelector('.js-nome').value;
  const senha = document.querySelector('.js-senha').value;
  localStorage.setItem('emailSalvo', email);
  localStorage.setItem('nomeSalvo', nome);
  localStorage.setItem('senhaSalvo', senha);
}

function Cadastro() {
  const template = `
    <p>Cadastre-se</p>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}

  `;
  return template;
}

export default Cadastro;
