import Button from '../components/button.js';
import Input from '../components/input.js';

function createLogin() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.hash = '#login'
        // alert(`Bem vindo ` + email)
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert(`Falha ao cadastrar, verifique o erro no console`)
      });
      }


      function createProfile() {
        const template = `
          <h1>Login</h1>
          <form>
          ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
          ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
          ${Button({ id: 'doing-login', title: 'Log In', onClick: createLogin})}
          </form>`;
        
        return template;
      }

export default createProfile;