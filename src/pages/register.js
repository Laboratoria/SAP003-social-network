
import Button from '../components/button.js';
import Input from '../components/input.js';

function createLogin() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    const name = document.querySelector('.js-name-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      if (user) {
        alert('Registrado com sucesso!')
        window.location.hash = '#feed';
      }
    })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert(`Falha ao cadastrar, verifique o e-mail e senha adicionado`)
      });
      }

      function comeBack (){
        window.location.hash = '#login'
      }

      function createProfile() {
        const template = `<header class='header'>
          <h1><img class='logo-feed' src='logobranco.png'/></a></h1>
      </header>
          <h1>Registre-se</h1>
          <form class='register-form'>
          ${Input({ class:'js-name-input', placeholder:'Como gostaria ser chamado?', type:'text', })}
          ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
          ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
          ${Button({ class: 'primary-button', id: 'doing-login', title: 'Log In', onClick: createLogin})}
          ${Button({ class: 'primary-button', id: 'come-back', title: 'Voltar', onClick: comeBack})}
          </form>`;

        return template;
      }

export default createProfile;
