import Button from '../components/button.js';
import Input from '../components/input.js';


function Home() {
  const template= `
  <h2> Faça login na sua conta </h2>
  <form>
  ${Input({placeholder: 'Digite seu e-mail', type: 'email', class: 'js-email-input'})}
  ${Input({placeholder: 'Digite sua senha', type: 'password', class: 'js-password-input'})}
  ${Button({id: 'button', title: 'Entrar', onClick: buttonLogin})}
  </form><br>
  
  ${Button({id: 'cadastro', title: 'Cadastrar', onClick: goToRegister })}

  `
    return template;
};
export default Home;

function goToRegister () {
  window.location.hash='register';
}

function buttonLogin () {

}
function buttonRegister() {
  const email= document.querySelector('.js-email-input').value;
  const password= document.querySelector('js-password-input').value;
  
}

// function locationHashChanged() {
//   if(location.hash==='#register.js') {
//     return registrar()
//   }
// }
// window.onhashchange = locationHashChanged;
  
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });email-password.html





//${Button({ id: '🎉', title: 'Botão 🎉' })}
