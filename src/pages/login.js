import databases from "../database.js";
import Button from '../components/button.js';
import Input from '../components/input.js';
import logo from '../components/logo.js'

const userLogin = () => {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);

  }).then(user => {
    console.log(user.isEmailVerified)
    if (!user.isEmailVerified) {


      alert('Confirme seu email');


    } else {
      alert('login com sucesso')
    }
  });

}
export const loginGoogle = () => {
  let db = firebase.firestore();
  databases.connect();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      const user = res.user;
      let userName = user.displayName;
      db.collection("socialMedia")
        .doc(user.uid)
        .get()

        .then(function (doc) {

          if (doc.exists) {
            alert('Sessão iniciada');
            window.location.hash = "#/feed";
          } else {
            //si no existe lo vamos a crear con uid de usuario
            saveUserToDatabaseAfterLogin(user, userName);
            alert('Sessão iniciada');
            window.location.hash = "#/feed";
          }
        });
    })
    .catch(err => {
      alert("Ocorreu um erro", err);
      window.location.hash = "#/login";
    });
};
const Login = () => {
  const template = `
     <section>
      ${logo({ img: 'image/logo.png', classImg: 'logo', classP: 'text-logo', text: 'MusicalSpace'})}
      <form class="container">
      ${Input({ type: 'email', placeholder: 'Email', class: 'js-email-input primary-input' })}
      ${Input({ type: 'password', placeholder: 'Password', class: 'js-password-input primary-input' })}
      ${Button({type: 'submit', title: 'Login', class: 'primary-button', onClick: userLogin})}
      </form>
     </section>
     <section class="login-container">
       <p class="login-text">Ou entre com...</p>
       <img src="./google.png" class="google-button">
       <p class="login-text">Não tem uma conta? <a href="#register" class="oi">Registre-se</a></p>
     </section>
      `;


  return template;
}
export default Login;
