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
  const email= document.querySelector('.js-email-input').value;
  const password= document.querySelector('js-password-input').value;
  // firebase.auth().signInWithEmailAndPassword(email, password)
// }).catch(function(erro){
  //   var erroCode = erro.code;
  //
  //   if(errorCode === 'auth/user-not-found'){
  //     alert('Usuário não encontrado')
  //   } else if(errorCode === 'auth/invalid-email') {
  //     alert('E-mail inválido')
  //   } else if (erroCode === 'auth/wrong-password') {
  //     alert('Senha incorreta')
  //   }
//   // });

// }
}
