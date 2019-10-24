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
        <div class="data-perfil">
        <label>Nome: 
        ${Input({
          class: 'name-perfil',
          value:`${firebase.auth().currentUser.displayName}`,
          type: 'text',
        })}</label/>
        <label>Email: 
        ${Input({
          class: 'email-perfil',
          value:`${firebase.auth().currentUser.email}`,
          type: 'text',
        })}</label>
        <label>Trabalho: 
        ${Input({
          class: 'perfil-job',
          value:`${firebase.firestore().collection('users').doc(firebase.auth().getUid(firebase.auth().currentUser.email)).get().then(function (doc) { document.querySelector('.perfil-job').value = doc.data().job })}`,
          type: 'text',
        })}</label>
        <label>Data de nascimento: 
        ${Input({
          class: 'perfil-born',
          value:`${firebase.firestore().collection('users').doc(firebase.auth().getUid(firebase.auth().currentUser.email)).get().then(function (doc) { document.querySelector('.perfil-born').value = doc.data().dateBorn })}`,
          type: 'text',
        })}</label>
        </div>
        ${Button({
        id: 'saveData',
        title: 'Salvar dados',
        onClick: saveData,
        })}
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

function pageFeed() {
  window.location.hash = 'post';
}

function logOut() {
  firebase.auth().signOut();
}

function deleteCount() {
  firebase.auth().currentUser.delete();
}


function saveData() {
  const name = document.querySelector('.name-perfil').value;
  const email = document.querySelector('.email-perfil').value;
  const job = document.querySelector('.perfil-job').value;
  const dateBorn = document.querySelector('.perfil-born').value;
  console.log(name,email,job,dateBorn)
  firebase.firestore().collection('users').doc(firebase.auth().getUid(firebase.auth().currentUser.email)).update(
    {job,
    dateBorn}
  );
  firebase.auth().currentUser.updateProfile({
    displayName: name,
    email,
  });
}

export default Perfil;
