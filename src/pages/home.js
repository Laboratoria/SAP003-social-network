
import Button from '../components/button.js';
import Input from '../components/input.js';

function signInWithEmailAndPassword() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((logedin) => {
      alert(`Bem vindo ${email}`);
      window.location.hash = '#database';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Usuario nao cadastrado');
      window.location.hash = '#register';
    }); email-password.html;
}

function Login() {
  const template = `
  <h1>entrar </h1>
  ${Input({
    class: 'js-email-input',
    placeholder: 'Email',
    type: 'email',
  })}
  ${Input({
    class: 'js-password-input',
    placeholder: 'Senha',
    type: 'password',
  })}
<br>
<br>
  ${Button({
    id: 'LoginAccount',
    title: 'Entrar',
    onClick: signInWithEmailAndPassword,
  })}
`;
  return template;
}

function logWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#postpage';
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    // ...
    });
}

function logWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  provider.setCustomParameters({
    display: 'popup',
  }); firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // window
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
}

function callPage() {
  window.location.hash = '#register';
}

function Home() {
  const template = `
    <h1>Home Page</h1>

    ${Button({ id: 'GOOGLE', title: 'GOOGLE', onClick: logWithGoogle })}
    ${Button({ id: 'FACE', title: 'FACEBOOK', onClick: logWithFacebook })}
    ${Button({ id: 'CREATE', title: 'REGISTRE-SE', onClick: callPage })}
    `;
}

export {
  Home,
  Login,
};
