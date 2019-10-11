import Button from '../components/button.js';
import Input from '../components/input.js';
import Google from '../components/google-button.js';


const signIn = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(result => console.log(result))
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.error-password').textContent = 'Senha Incorreta';
      } else if (errorCode === 'auth/user-not-found') {
        document.querySelector('.error-email').textContent = 'Email não registrado!';
      }
    });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = '#timeline';
    }
  })
};


const register = () => {
  const email = document.querySelector('.js-input-email').value;
  const password = document.querySelector('.js-input-password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => console.log(result))
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('.error-email').textContent = 'Email já possui uma conta';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error-email').textContent = 'Formato de email inválido';
      } else if (errorCode === 'auth/weak-password') {
        document.querySelector('.error-password').textContent = 'Senha deve possuir no mínimo 6 caracteres';
      }
    });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = '#timeline';
    }
  })
};

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => console.log(result))
    .catch(err => alert(err.message));
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
    type: 'email',
  })}
  <p class="error-email"></p>
    ${Input({
    class: 'js-input-password',
    placeholder: 'Senha',
    type: 'password',
  })}
  <p class="error-password"></p>
    ${Button({
    title: 'Entrar',
    onClick: signIn,
  })}
    ${Button({
    title: 'Registrar',
    onClick: register,
  })} 
  <p id="text-p" class="text">ou entrar com...</p>
    ${Google({
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
