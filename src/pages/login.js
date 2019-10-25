import Button from '../components/button.js';
import Input from '../components/input.js';
import ButtonImage from '../components/image-button.js';

const signIn = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.error-password').textContent = 'Senha Incorreta';
      } else if (errorCode === 'auth/user-not-found') {
        document.querySelector('.error-email').textContent = 'Email não registrado!';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error-email').textContent = 'Formato de email inválido';
      }
    });
};

const register = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('.error-email').textContent = 'E-mail já possui uma conta cadastrada!';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error-email').textContent = 'Formato de email inválido!';
      } else if (errorCode === 'auth/weak-password') {
        document.querySelector('.error-password').textContent = 'Senha deve possuir no mínimo 6 caracteres!';
      }
    });
};

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider);
};

const login = () => {
  const template = `
    <img class='img-logo' src='images/img-logo.png'>
    <h1 class='text-title'>Low Carb Style</h1>
    <h2 class='text-welcome'>Boas vindas...</h2>
    <p class='info-login'>Insira nos campos abaixo seu e-mail e senha para entrar ou cadastrar-se.</p>

    <form class='form'>
    ${Input({
    class: 'js-input-email',
    placeholder: 'email@exemplo.com',
    type: 'e-mail',
    id: 'js-input-email',
  })}
  <p class='error-email'></p>

    ${Input({
    class: 'js-input-password',
    placeholder: 'senha',
    type: 'password',
    id: 'js-input-password',
  })}
  <p class='error-password'></p>
  <div class='buttons'>
    ${Button({
    class: 'primary-button',
    title: 'Entrar',
    onClick: signIn,
  })}
    ${Button({
    class: 'primary-button',
    title: 'Registrar',
    onClick: register,
  })} 
  </div>
  <p id='text-p' class='text'>Ou entrar com...</p>
    ${ButtonImage({
    class: 'img-google',
    type: 'image',
    src: 'images/google.png',
    onClick: googleLogin,
  })}
    </form>
  `;

  return template;
};

export default login;
