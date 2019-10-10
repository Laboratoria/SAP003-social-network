import Button from '../components/button.js';
import Input from '../components/input.js';
import logo from '../components/logo.js'


const createUser = () => {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    };
  }

  ).then(cred => {
    if (cred.additionalUserInfo.isNewUser) {
      firebase.auth().currentUser.sendEmailVerification().then( ()=> {
        alert('Email cadastrado com sucesso! Verifique sua caixa de entrada!');
      });
    }
  });
};

const location = () =>{
  console.log(location.hash);
  location.hash = '';
  //document.querySelector('main').innerHTML = Login();
}

const Register = () => {
  const template = `
  <section>
    ${logo({ img: 'image/logo.png', classImg: 'logo', classP: 'text-logo', text: 'MusicalSpace'})}
    <form class="container">
    ${Input({ type: 'email', placeholder: 'Email', class: 'js-email-input primary-input' })}
    ${Input({ type: 'password', placeholder: 'Password', class: 'js-password-input primary-input' })}
    ${Button({type: 'submit', title: 'Cadastrar', class: 'primary-button', onClick: createUser})}
    </form>
    ${Button({type: 'button', title: 'Voltar', class: 'primary-button', onClick: location})}
  </section>
  `;
  return template;
}

export default Register;
