import Button from '../components/button.js';
import Input from '../components/input.js';


function newUser() {

  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  const name = document.querySelector('.name-input').value;
  const errorMessageField = document.getElementById('errorMessageSignup');

  if(email.length > 0 && password.length > 0 && name.length > 0) {

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        if (resp.user) {
          resp.user.updateProfile({
            displayName: name
          })
            .then(() => {
              db.collection('users').doc(resp.user.uid).set({
                name: name,
                bio:'',
              })
                .then(() => {
                  window.location = '#login';
                });
            });
        }
      })
      .catch(error => {
        
        const errorCode = error.code;
        //const errorMessage = error.message;

        const errorMessage = errorCode === 'auth/invalid-email' ? 'Email inválido.' : errorCode === 'auth/weak-password' ? 'A senha deve conter 6 caracteres ou mais.' : 'Preencha os campos corretamente';
      
        errorMessageField.textContent = errorMessage;
      });
  } else {
    errorMessageField.textContent = 'Preencha todos os campos para realizar seu cadastro!';
  };
}

function Signup() {
  const userInfo = `
    ${Input({
    type: 'text',
    class: 'name-input',
    placeholder: 'Nome',
    value:''
  })}
    ${Input({
    type: 'email',
    class: 'email-input',
    placeholder: 'Email',
    value:''
  })}
    ${Input({
    type: 'password',
    class: 'password-input',
    placeholder: 'Senha',
    value:''
  })}
    ${Button({
    class: 'btn btn-register btn-gray',
    id: 'btn-new-user',
    onclick: newUser,
    title: 'Cadastrar',
  })}
  `;
  const template = `
    <header class="main-header">
      <h1>Bem vindo(a)!</h1>
    </header>
    <img class='signup-img' src="./img/icon-pluto.png">
    <form class="form-content-signup">
      <main class="register-input">
        <p class="register-text">Para realizar o cadastro, preencha as informações abaixo:</p>
        ${userInfo}
        <div id="errorMessageSignup" class="error-message"></div>
      </main>
    </form>
    `;
  return template;
}

export default Signup;