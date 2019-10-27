import Button from '../components/button.js';
import Input from '../components/input.js';

function createLogin() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    const name = document.querySelector('.js-name-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert(`Falha ao cadastrar, verifique o e-mail e senha adicionado`)
      })
      .then((cred) => {
        if(cred){
          alert('Registrado com sucesso! Seja Bem-Vindo')
         window.location.hash = '#feed';
        }
          cred.user.updateProfile({
          displayName: name,
      });
    });
  }

      function comeBack (){
        window.location.hash = '#login'
      }

function createProfile() {
    const template = `<header class='header'>
    <h1><img class='logo-register' src='logobranco.png'/></a></h1>
    </header>

    <form class='register-form'>
    <h1 class='reg'>Registre-se</h1>
    ${Input({ class:'js-name-input', placeholder:'Como gostaria ser chamado?', type:'text', })}
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ class: 'primary-button', id: 'doing-login', title: 'Registrar', onClick: window.app.createLogin, })}
    ${Button({ class: 'primary-button', id: 'come-back', title: 'Voltar', onClick: window.app.comeBack, })}
    </form>`;

    return template;
}

window.app = {
  comeBack,
  createLogin
}

export default createProfile
