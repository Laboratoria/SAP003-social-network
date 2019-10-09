import Button from './button.js';
import Input from './input.js';

function userLogin(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}    

function Login() {
  const login = `<form>
    ${Input({
    id: 'email',
    class: 'primary-input',
    type: 'email',
    placeholder: 'E-mail',
  })}
  ${Input({
    id: 'password',
    class: 'primary-input',
    type: 'password',
    placeholder: 'Senha',
  })}
  ${Button({
    id: 'send',
    class: 'primary-button',
    title: 'Entrar',
    onClick: userLogin,
  })}
    </form>`;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("user is logged")
        } else {
          alert ("errrro")
        }
      });

    return login  
}



export default Login;
