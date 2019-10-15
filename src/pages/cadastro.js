import Button from '../components/button.js';
import Input from '../components/input.js';

function cadastrarUser() {
  const nome = document.querySelector('.nome-input').value;
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  // eslint-disable-next-line no-console
  console.log(nome, email, password);
  window.location.href = '#feed';
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(errorCode);
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
    
    <section>
    <form>
    ${Input({ class: 'nome-input', placeholder: 'Nome', type: 'text' })}<br>
    ${Input({ class: 'email-input', placeholder: 'E-mail', type: 'text' })}<br>
    ${Input({ class: 'senha-input', placeholder: 'Senha', type: 'password' })}<br>
    ${Button({ id: 'cadastro', title: 'Cadastrar', onClick: cadastrarUser })}
    ${Button({ id: 'voltar', title: 'voltar', onClick: voltarPg })}
    </form>
    </section>
    
`;
  return template;
}

export default Cadastro;
