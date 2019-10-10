import databases from "../database.js";
import Button from '../components/button.js';
import Input from '../components/input.js';

const userLogin = () => {
  const email = document.querySelector('.js-email-login').value;
  const password = document.querySelector('.js-password-login').value;
 
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
      <form class="container">
      ${Input({ type: 'email', placeholder: 'Email', class: 'js-email-login primary-input' })}
      ${Input({ type: 'password', placeholder: 'Password', class: 'js-password-login primary-input' })}
      ${Button({ type: 'submit', title: 'Login', onClick: userLogin })}
  
      </form>
      </section>
    `;


  return template;
}
export default Login;