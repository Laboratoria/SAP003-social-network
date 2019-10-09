import Button from '../components/button.js';
import Input from '../components/input.js';

const send = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(result => console.log(result))
    .catch(err => alert(err.message));

  return alert('Entrou na timeline')
};

const register = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => console.log(result))
    .catch(err => alert(err.message));
  return alert('Conta criada com sucesso!')
};

const login = () => {
  const template = `
      <img class="img" src="images/img.png">
      <h1 id="text-low" class="text">Low Carb Style</h1>
      <h2 id="text-boas-vindas" class="text">Boas vindas...</h2>
    <form>
    ${Input({
    class: 'js-input-email',
    placeholder: 'Email',
    type: 'text',
  })}
    ${Input({
    class: 'js-input-password',
    placeholder: 'Senha',
    type: 'password',
  })}
    ${Button({
    title: 'Entrar',
    onClick: send,
  })}
    ${Button({
    title: 'Registrar',
    onClick: register,
  })}
    </form>
      <p id="text-p" class="text">ou entrar com...</p>
  `;

  return template;
};


export default login;
