import Button from '../components/button.js';
import Input from '../components/input.js';

function deleteProfile(event) {
  const id = event.target.dataset.id;
  document.querySelector('.card-persona').innerHTML = '';
  firebase.firestore().collection('persona').doc(id).delete();
  event.target.parentElement.remove();
}

function validateUser(event) {
  const id = firebase.auth().currentUser.uid;
  firebase.firestore().collection('persona').get().then((querySnapshot) => {
    querySnapshot.forEach((persona) => {
      const user = `${persona.data().user_id}`;
      if (user == id){
        window.profile.deleteProfile(event);
     }
     });
    });
}

function cleanProfile (){
  document.querySelector('.js-age-input').value = '';
  document.querySelector('.js-profession-input').value = '';
  document.querySelector('.js-interests').value = '';
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
      <li>${persona.name}</li>
      <img src='${persona.photo}' width='60px' height='60px'/>
      <li>Idade: ${persona.age}</li>
      <li>E-mail: ${persona.email}</li>
      <li>Profissão: ${persona.profession}</li>
      <li>Interesses: ${persona.interests}</li>
      ${window.button.component({
        dataId: persona.id,
        title: '🗑️',
        class: 'primary-button',
        onClick: window.profile.validateUser,
      })}
      </ul>
      `)
    });
     window.profile.cleanProfile()
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
      const postProfile = `<section class='card-persona'><ul data-id='${persona.id}' class='info-persona'>
      <li> ${persona.data().name}</li>
      <li id='persona_${persona.id}'>
      Foto: <img src='${persona.data().photo}' width='60px' height='60px'/>
      <li id='age'>Idade: ${persona.data().age}</li>
      E-mail: ${persona.data().email}
      <li id='profession'>Profissão: ${persona.data().profession}</li>
      <li id='interests'>Interesses: ${persona.data().interests}</li>
      <li>
      ${window.button.component({
        dataId: persona.id,
        title: '🗑️',
        class: 'primary-button',
        onClick: window.profile.validateUser,
      })}</li>
      </ul>
      </section>`

      document.querySelector('.display').innerHTML += postProfile;
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
   ${Input({
    class: 'js-age-input',
    placeholder: 'Idade',
    type: 'text', required:''
  })}
  ${Input({
    class: 'js-profession-input',
    placeholder: 'Profissão',
    type: 'text',
  })}
  ${Input({
    class: 'js-interests',
    name: 'interests',
    type: 'text',
    placeholder: 'Escreva seus interesses. Ex: Front-End, Back-End, Inteligência Artificial...',
  })}
  ${Button({
    class: 'save-button',
    title: 'Salvar',
    onClick: salve
  })}
  <hr class='line' color='orange'>
  <h3 class='users-title'>Usuários da RedeTech</h3>
  </form>

  <li class='display'>${displayPersona}</li>
  `;

    return template;
}

window.profile = {
  loadProfile,
  deleteProfile,
  Prev,
  signOut,
  validateUser,
  cleanProfile
};

export default Profile;
