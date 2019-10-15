import Button from '../components/button.js';
import Input from '../components/input.js';


function loginRegisteredUser() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      localStorage.setItem('user', JSON.stringify(cred.user));
      console.log(cred.user);
      auth.onAuthStateChanged(user => {
        if (user) {
          window.location = '#feed';
          //window.user = user;
        }
        console.log(user);
      });
    }).catch(() => {
      const errorMessageField = document.getElementById('errorMessage');
      errorMessageField.textContent = 'email e/ou senha inválidos.';
      document.querySelector('.email-input').addEventListener('focus', () => {
        errorMessageField.textContent = '';
      });
    });
}

function signInWithAccount(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // if (result.credential) {
      //   const token = result.credential.accessToken;
      // };
      const user = result.user;
      if (result) {
        location.hash = "#feed";
      }
      localStorage.setItem('user', JSON.stringify(user));
      return db.collection('users').doc(user.uid).set({
        name: user.displayName
      });

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      alert(errorCode + errorMessage + email);
    });
}

function loginGoogleUser() {
  const provider = new firebase.auth.GoogleAuthProvider();
  signInWithAccount(provider);
}

function Login() {
  const userLogin = `
  ${Input({
    type: 'email',
    class: 'email-input',
    placeholder: 'Email',
  })}
  ${Input({
    type: 'password',
    class: 'password-input',
    placeholder: 'Senha',
  })}
  ${Button({
    class: 'btn',
    id: 'btn-log-in',
    onclick: loginRegisteredUser,
    title: 'Login',
  })}
  ${Button({
    id: 'authGoogleButton',
    class: 'btn fa fa-google',
    onclick: loginGoogleUser,
    title: '',
  })}
  `;
  const template = `
  <img src="./img/pluto-floral-and-botanical-growth.png">
  <form class="form-content">
    <h1>Horta Urbana</h1> 
    ${userLogin}
    <div id="errorMessage"></div>
    <p>Ainda não é membro? 
    <a href="#signup">Cadastre-se!</a>
    </p> 
  </form>
  `;
  return template;
}

export default Login;

window.signInWithAccount = signInWithAccount;
