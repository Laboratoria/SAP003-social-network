import Button from '../components/button.js';
import Input from '../components/input.js';


function Home() {
  const template= `
  <h2> Faça login na sua conta </h2>
  <form>
  ${Input({placeholder: 'Digite seu e-mail', type: 'email', class: 'js-email-input'})}
  ${Input({placeholder: 'Digite sua senha', type: 'password', class: 'js-password-input'})}
  ${Button({id: 'button', title: 'Entrar', onClick: buttonLogin})}<br>
  ${Button({id: 'button', title: 'Login com o Google', onClick:googleLogin})}
  </form><br>


  ${Button({id: 'cadastro', title: 'Cadastrar', onClick: goToRegister })}

  `
    return template;
};
export default Home;


function goToRegister () {
  window.location.hash='#register';
}

function buttonLogin () {
  const email= document.querySelector('.js-email-input').value;
  const password= document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
   window.location.hash='#feed'

  }).catch(function(error) {
    let errorCode = error.code;
    if (errorCode === 'auth/user-not-found'){
      throw alert('Usuário não encontrado')
    } else if (errorCode === 'auth/invalid-email'){
      throw alert('E-mail inválido')
    }else if (errorCode === 'auth/wrong-password'){
      throw alert('Senha incorreta')
    }
  });


}

function googleLogin () {
    let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
    window.location.hash='#feed'
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}
