import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {

  //function signIn() {
    //const email = document.querySelector('.js-email-input').value;
    //const password = document.querySelector('.js-password-input').value;
    // function certo() console.log("certo");
    // function erro() console.log('erro');
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    // } else {
    //     alert(errorMessage);
    // }

  //console.log(email, password)
  //firebase.auth().signInWithEmailAndPassword(email, password).then(certo, erro) 
  //}

  function changePage(){
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((certo) => {
      console.log('certo')
      window.location.href = '#feed';
    },(error) => {
    // Handle Errors here.  
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errooooo')
    });
  }
  const template = `
    <h1>Login</h1>
      <form>
        ${Input({ type: 'email', class: 'js-email-input', placeholder: 'email' })}
        ${Input({ type: 'password', class: 'js-password-input', placeholder: 'password' })}
        ${Button({ class: 'signIn', title: 'signIn', onclick: changePage })}
        
      </form>
      <a href="#register">"Create an Account"</a>
    `;
  return template;
}


export default Login;