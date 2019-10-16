import Button from '../components/button.js';
import Input from '../components/input.js';

function cadastrarUser() {
  const nome = document.querySelector('.nome-input').value;
  const sobrenome = document.querySelector('.sobrenome-input').value;
  const email = document.querySelector('.email-input').value;
  const nascto = document.querySelector('.dtNasc-input').value;
  const password = document.querySelector('.senha-input').value;
  
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
  window.location.href = '#home';
}

function Cadastro() {
  const template = `
    <h1> Rede Social</h1>
    <h2> Cadastro</h2>


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

export default Cadastro;


/* document.getElementById('postForm').addEventListener('submit', formSubmit);

function formSubmit() {
  event.preventDefault();
  const textInput = document.getElementById('postText').value;
  const post = {
    likes: 5,
    comments: [],
    text: textInput.value,
    user_id: 'nat',
    date: firebase.firestore.fiedValue.serverTimesTamp(),
  };
  firebase.firestore().collection('posts').add(post).then((res) => {
    textInput.value = '';
    loadData();
  });
}


function loadData() {
  const postColections = firebase.firestore().collection('posts');
  const postList = document.getElementById('posts');
  postList.innerHTML = 'carregando...';
  postColections.orderBy('timestamp').get().then((snap) => {
    postList.innerHTML = '';
    snap.forEach((post) => {
      addPost(post);
      // console.log(post.data());
    });
  });
}

function addPost(post) {
  const postList = document.getElementById('posts');
  const postTemplate = `
  <li>
  ${post.data().timestamp.toDate().toLocaleString('pt-BR')}:
  ${post.data().text}
  </li>
  `;

  postList.innerHTML = postTemplate;
}

firebase.firestore().collection('posts').doc('id do post').update({ likes: 1 }); */

// -------------------------------------------------------------------------------
/*
document.getElementById('cadastroForm').addEventListener('submit', cadastroSubmit);

function cadastroSubmit() {
  event.preventDefault();
  const inputNome = document.getElementById('nome-input');
  const inputEmail = document.getElementById('email-input');
  const user = {
    nome: inputNome.value,
    email: inputEmail.value,
  };
  // eslint-disable-next-line no-unused-vars
  firebase.firestore().collection('users').add(user).then((res) => {
    inputNome.value = '';
    inputEmail.value = '';
  });
} */
