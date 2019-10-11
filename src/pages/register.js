import Button from '../components/button.js';
import Input from '../components/input.js';



function register(){
    const template = `
    ${Button({id:'voltar', title: 'Voltar', onClick: goToLogin})}    
    
    <h2> Crie a sua conta </h2>
  <form> 
       ${Input({ placeholder: 'E-mail', type: 'email', class: 'js-email-input'})}
       ${Input({ placeholder: 'Senha', type: 'password', class: 'js-password-input'})}
       ${Button({ id: 'button', title: 'Cadastrar', onClick: buttonRegister})}
  </form>
       `;
      return template;
  }
  
  function goToLogin() {
    window.location.hash='home';
  }
  function buttonRegister() {
    const email= document.querySelector('.js-email-input').value;
    const password= document.querySelector('.js-password-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      firebase.auth().onAuthStateChange(function(user){
        if(user) {
          console.log('funciona');
        } else {
          alert('não funciona')
        }
      })
    }).catch(function(user) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
    // firebase.auth().createUser({
    //   email: 'user@example.com',
    //   emailVerified: false,
    //   password: 'secretPassword'
    // })
    // .then(function(userRecord) {
    //   console.log('logado', userRecord.id)
    // })
    // .catch(function(error){
    //   console.log('erro', error)
    // });
  }
  
 
  
  export default register;