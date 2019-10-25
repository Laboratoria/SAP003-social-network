
import Button from '../components/button.js';
import Input from '../components/input.js';

function salve() {
  const id = firebase.auth().currentUser.uid;
  const email = firebase.auth().currentUser.email;
  const name = firebase.auth().currentUser.displayName;
  const age = document.querySelector('.js-age-input');
  const profession = document.querySelector('.js-profession-input');
  const photo = document.querySelector('.js-photo-input');
  const interests = document.querySelector('.js-interests');
  const persona = {
    email,
    user_id: id,
    name,
    age: age.value,
    profession: profession.value,
    photo: photo.value,
    interests: interests.value,
  };
  firebase.firestore().collection('persona').add(persona).then((docRef) => {
      document.querySelector('.display').insertAdjacentHTML('afterbegin', `
      <ul class= 'displayProfile' data-id='${docRef.id}'>
      ${persona.email}<br>
      ${persona.user_id}<br>
      ${persona.name}<br>
      ${persona.age}<br>
      ${persona.profession}<br>
      ${persona.interests}<br>
      <img src='${persona.photo}'/>
      </ul> `)
    });
}

function Prev() {
  window.location.hash = '#feed';
}

function signOut() {
  firebase.auth().signOut().then(() => {
    window.location.hash = '#login';
    alert('Agora tu saiu.');
  });
}

function Profile() {
  let displayPersona = '';
  firebase.firestore().collection('persona').get()
    .then((snap) => {
      snap.forEach((persona) => {
        displayPersona += `<section>
        Foto: <img src='${persona.photo}'/>
        E-mail: ${persona.email} <br><br>
        Nome: ${persona.name}<br><br>
        Idade: ${persona.age}<br><br>
        Profisão: ${persona.profession}<br><br>
        Interesses: ${persona.interests}<br><br>
  </section>`;
      });
    });


  const template = `
  <header class='header'>
    <h1><img class='logo-feed' src='logoredetech.png'/></a></h1>
    <nav>
        <li class="left">${Button({ class: 'left',
        title: '🚪Encerrar Sessão',
        onClick: signOut,
      })}</li>
      <li class="right">${Button({ class: 'right',
          title: 'Feed',
          onClick: Prev,
      })}</li>
    </nav>
</header>
  <form class='profile'>
  <h1>Perfil</h1>
  <label class='upload-photo'> Foto
  ${Input({
    class: 'js-photo-input',
    placeholder: 'Foto',
    type: 'file',
  })}
  </label><br><br>
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
    onClick: salve,
  })}
  </form>
  <li class='display'>${displayPersona}</li>
  `;

  return template;
}

export default Profile;