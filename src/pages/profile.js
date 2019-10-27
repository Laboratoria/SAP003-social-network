import Button from '../components/button.js';
import Input from '../components/input.js';

function deleteProfile(event) {
  const id = event.target.dataset.id;
  document.querySelector('.display').innerHTML = '';
  firebase.firestore().collection('persona').doc(id).delete();
  event.target.parentElement.remove();
}

function salve() {
  const id = firebase.auth().currentUser.uid;
  const email = firebase.auth().currentUser.email;
  const name = firebase.auth().currentUser.displayName;
  const age = document.querySelector('.js-age-input');
  const profession = document.querySelector('.js-profession-input');
  const interests = document.querySelector('.js-interests');
  const photo = 'https://icon-library.net/images/profile-png-icon/profile-png-icon-1.jpg';
  const persona = {
    email,
    user_id: id,
    name,
    age: age.value,
    profession: profession.value,
    photo,
    interests: interests.value,
  };
  firebase.firestore().collection('persona').add(persona).then((docRef) => {
      document.querySelector('.display').insertAdjacentHTML('afterbegin', `
      <ul class= 'displayProfile' data-id='${docRef.id}'>
      <img src='${persona.photo}' width='60px' height='60px'/>
      ${persona.email}<br>
      ${persona.name}<br>
      ${persona.age}<br>
      ${persona.profession}<br>
      ${persona.interests}<br>
      ${window.button.component({
        dataId: persona.id,
        title: '🗑️',
        class: 'primary-button',
        disabled: 'disabled',
        onClick: window.profile.deleteProfile,
      })}
      </ul>
      `)
    });
}

function Prev() {
    window.location.hash = '#feed';
}

function signOut() {
    firebase.auth().signOut().then(() => {
        window.location.hash = '#login';
        alert('Encerrada a Sessão');
    });
}

function loadProfile () {
  firebase.firestore().collection('persona').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((persona) => {
      const postProfile = `<ul data-id='${persona.id}' class='info-persona'>
      <li class=''> ${persona.data().name}</li>
      <li id='persona_${persona.id}'><br>
      Foto: <img src='${persona.data().photo}' width='60px' height='60px'/><br>
      <li id='age'>Idade: ${persona.data().age}</li><br>
      E-mail: ${persona.data().email}<br>
      <li id='profession'>Profissão: ${persona.data().profession}</li><br>
      <li id='interests'>Interesses: ${persona.data().interests}</li><br>
      <li>
      ${window.button.component({
        dataId: persona.id,
        title: '🗑️',
        class: 'primary-button',
        onClick: window.profile.deleteProfile,
      })}</li>`

      document.querySelector('.display').innerHTML = postProfile;
    });
  });
}

function Profile() {
  let displayPersona = '';
  firebase.firestore().collection('persona').get()
    .then((snap) => {
      snap.forEach((persona) => {
        displayPersona += `<section>
        Foto: <img src='${persona.photo}' width='60px' height='60px'/>
        E-mail: ${persona.email} <br><br>
        Nome: ${persona.name}<br><br>
        Idade: ${persona.age}<br><br>
        Profisão: ${persona.profession}<br><br>
        Interesses: ${persona.interests}<br><br>
  </section>`;
            });
        });

    window.profile.loadProfile();

    const template = `
    <header class='header'>
        ${Button({ class: 'right',
            title: 'Feed',
            onClick: Prev,
        })}
        <img class='logo-mobile-perfil' src='logobranco.png'/>
        ${Button({ class: 'left',
        title: '🚪Sair',
        onClick: signOut,
        })}
  </header>
  <form class='profile'>
  <h1>Perfil</h1>
  <br><br>
   ${Input({
    class: 'js-age-input',
    placeholder: 'Idade',
    type: 'text',
  })}<br><br>
  ${Input({
    class: 'js-profession-input',
    placeholder: 'Profissão',
    type: 'text',
  })}<br><br>
  ${Input({
    class: 'js-interests',
    name: 'interests',
    type: 'text',
    placeholder: 'Escreva seus interesses. Ex: Front-End, Back-End, Inteligência Artificial...',
  })}
  <br>
  ${Button({
    class: 'primary-button',
    title: 'Salvar',
    disable: 'enable',
    onClick: salve,
  })}
  </form>
  <li class='display'>${displayPersona}</li>
  `;

    return template;
}

window.profile = {
  loadProfile,
  deleteProfile,
  Prev,
  signOut
};

export default Profile;
