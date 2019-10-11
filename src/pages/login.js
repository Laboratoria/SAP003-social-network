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
    .catch(err => alert(err.message));
    
  firebase.auth().onAuthStateChanged(function(user) {
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
    .catch(err => alert(err.message));
  
     
  firebase.auth().onAuthStateChanged(function(user) {
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
    ${Input({
    class: 'js-input-password',
    placeholder: 'Senha',
    type: 'password',
  })}
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

// function locationHashChanged() {
//   if (location.hash === '#timeline') {
//     document.querySelector('main').innerHTML = timeline();
//   }
// }

// window.addEventListener("hashchange", locationHashChanged, false);