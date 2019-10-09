import Button from '../components/button.js';
import Input from '../components/input.js';

// const sendEmailVerification = () => {
//   // [START sendemailverification]
//   firebase.auth().currentUser.sendEmailVerification().then(function () {
//     // Email Verification sent!
//     // [START_EXCLUDE]
//     alert('Email Verification Sent!');
//     // [END_EXCLUDE]
//   });
//   // [END sendemailverification]
// }
const createUser = () => {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.')
    } else {
      alert(errorMessage);
    };


  }
  ).then(cred => {
    if (cred.additionalUserInfo.isNewUser) {
      firebase.auth().currentUser.sendEmailVerification().then( ()=> {
        alert('Email cadastrado com sucesso! Verifique sua caixa de entrada!');

      });
    }

  });

};


const Register = () => {
  const template = `
  <section>
    <form class="container">
    ${Input({ type: 'email', placeholder: 'email', class: 'js-email-input' })}
    ${Input({ type: 'password', placeholder: 'password', class: 'js-password-input' })}
    ${Button({ type: 'submit', title: 'Cadastrar', onClick: createUser })}
    </form>
    </section>
  `;


  return template;
}



export default Register;
