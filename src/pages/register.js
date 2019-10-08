import Button from '../components/button.js';
import Input from '../components/input.js';

function createUser(){
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.')
    } else {
      alert(errorMessage);
    };
  });
};

function Register() {
  const template = `
    <form class="container">
    ${Input({type:'email', placeholder: 'Email', class: 'js-email-input primary-input'})}
    ${Input({type:'password', placeholder: 'Password', class: 'js-password-input primary-input'})}
    ${Button({ type: 'submit', title: 'Cadastrar', onClick: createUser})}
    </form>
  `;


  return template;
}

export default Register;
