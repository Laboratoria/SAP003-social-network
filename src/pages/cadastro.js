import Button from '../components/button.js';
import Input from '../components/input.js';

function enviarCadastro() {
  const nome = document.querySelector('.nome-input').value;
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  // eslint-disable-next-line no-console
  console.log(nome, email, password);
  window.location.href = '#feed';
  firebase.auth().signInWithEmailAndPassword(nome, email, password).catch(() => {
    // Handle Errors here.
    // let errorCode = error.code;
  // let errorMessage = error.message;
    // ...
  });
}

function voltarPg() {
  window.location.href = '#home';
}

function Cadastro() {
  const template = `
    <h1> Rede Social</h1>
    <h2> Cadastro</h2>
  
    ${Input({ class: 'nome-input', placeholder: 'Nome', type: 'text' })}<br>
    ${Input({ class: 'email-input', placeholder: 'email', type: 'text' })}<br>
    ${Input({ class: 'senha-input', placeholder: 'password', type: 'password' })}<br>
    ${Button({ id: 'cadastro', title: 'Cadastrar', onClick: enviarCadastro })}
    ${Button({ id: 'voltar', title: 'voltar', onClick: voltarPg })}
`;
  return template;
}

export default Cadastro;
