import Button from '../components/button.js';
import Input from '../components/input.js';

function cadastrarUser() {
  const nome = document.querySelector('.nome-input').value;
  const sobrenome = document.querySelector('.sobrenome-input').value;
  const email = document.querySelector('.email-input').value;
  const nascto = document.querySelector('.dtNasc-input').value;
  const password = document.querySelector('.senha-input').value;
  window.location.href = '#feed';
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    window.location.href = '#feed';
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    alert(errorCode);
    });
  const user = {
    nome,
    email,
    sobrenome,
    nascto,
  };
  firebase.firestore().collection('users').add(user).then((res) => {
    nome.value = '';
    email.value = '';
  });
}

function voltarPg() {
  window.location.href = '#feed';
}

function editarPerfil() {
  const template = `
    <h1> Editar Perfil </h1>

  <section>
  <form>
    ${Input({ class: 'nome-input', placeholder: 'Nome', type: 'text' })}
    ${Input({ class: 'sobrenome-input', placeholder: 'Sobrenome', type: 'text' })}
    ${Input({ class: 'dtNasc-input', placeholder: 'Nascimento', type: 'text' })}
    ${Input({ class: 'email-input', placeholder: 'E-mail', type: 'text' })}
    ${Input({ class: 'senha-input', placeholder: 'Senha', type: 'password' })}
    ${Button({ id: 'cadastro', title: 'Cadastrar', onClick: cadastrarUser })}
    ${Button({ id: 'voltar', title: 'voltar', onClick: voltarPg })}
  </form>
  </section>
`;
  return template;
}

export default editarPerfil;