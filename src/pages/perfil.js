import Button from '../components/button.js';
import Input from '../components/input.js';
import Menu from '../components/menu.js';

function Perfil() {
  const template = `
  <div class="box">
    <header class="header"><img src="./Imagens/header-logo.png">
    <input type="checkbox" id="btn-menu"/>
    <label for="btn-menu">&#9776;</label>
    <nav class="menu">
    <ul>
    ${Menu({
        name: 'Feed',
        link: pageFeed,
      })}
    ${Menu({
        name: 'Sair',
        link: logOut,
      })}
    </ul> 
    </nav>
    </header>
    <section class = "primary-box">
      <h1 class="name-network">Heroínas</h1>
      <form class="primary-box">
        ${firebase.auth().currentUser.displayName}
        ${firebase.auth().currentUser.email}
        ${Button({
          id: 'deleteCount',
          title: 'deletar conta',
          onClick: deleteCount,
          })}
    </form>
  </section>
</div>
  `;
  location.hash = 'perfil'
  return template;
}

/* function createCount() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: name
      });
      firebase.auth().currentUser.sendEmailVerification()
      window.location.hash = 'login';
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        document.querySelector('.alertMessage').textContent ='E-mail já cadastrado.';
      } if (errorCode == 'auth/weak-password') {
        document.querySelector('.alertMessage').textContent = 'A senha é muito fraca.';
      } if (errorCode == 'auth/invalid-email') {
        document.querySelector('.alertMessage').textContent ='E-mail inválido.';
      } else {
        document.querySelector('.alertMessage').textContent = errorMessage;
      }
    });
} */
function pageFeed() {
    window.location.hash = 'post';
  }

  function logOut(){
    firebase.auth().signOut();
  }

  function deleteCount(){
    firebase.auth().currentUser.delete();
  }

export default Perfil;
