import databases from "../database.js";
import Button from '../components/button.js';
import Input from '../components/input.js';
import logo from '../components/logo.js'
import Google from '../components/google-login.js'

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

  }).then(user => {
    console.log(user.isEmailVerified)
    if (!user.isEmailVerified) {


      alert('Confirme seu email');


    } else {
      alert('login com sucesso')
    }
  });
}

// export const banana = () => {
const loginGoogle = () =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => console.log(result)).catch(erro => alert(erro.message));
}
//   console.log("oi");
  // let db = firebase.firestore();
  // databases.connect();
  //var provider = new firebase.auth.GoogleAuthProvider();
  // firebase
  //   .auth()
  //   .signInWithPopup(provider)
  //   .then(res => {
  //     const user = res.user;
  //     let userName = user.displayName;
  //     db.collection("socialMedia")
  //       .doc(user.uid)
  //       .get()
  //
  //       .then(function (doc) {
  //
  //         if (doc.exists) {
  //           alert('Sessão iniciada');
  //           window.location.hash = "#/feed";
  //         } else {
  //           //si no existe lo vamos a crear con uid de usuario
  //           saveUserToDatabaseAfterLogin(user, userName);
  //           alert('Sessão iniciada');
  //           window.location.hash = "#/feed";
  //         }
  //       });
  //   })
  //   .catch(err => {
  //     alert("Ocorreu um erro", err);
  //     window.location.hash = "#/login";
  //   });
//};

// document.querySelector('.google-button').addEventListener('onClick', googleLogin)
//
// const googleLogin= ()=>{
//   console.log('funfou')
// }

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
       ${Google({src:'image/google.png', class: 'google-button', onClick: loginGoogle, type: 'image'})}
       <p class="login-text">Não tem uma conta? <a href="#register" class="link">Registre-se</a></p>
     </section>
      `;


  return template;
}
export default Login;
