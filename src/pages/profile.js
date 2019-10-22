import Input from '../components/input.js';
import List from '../components/list-menu.js';
import Button from '../components/button.js';

const goTimeline = () => {
  window.location = '#timeline';
};

const signOut = () => firebase.auth().signOut();

const updateProfile = () => {
  const nameUser = document.querySelector('.inp-name-profile').value;
  const ageUser = document.querySelector('.inp-age-profile').value;
  const professionUser = document.querySelector('.inp-profession-profile').value;
  firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .set({
      name: nameUser,
      age: ageUser,
      profession: professionUser,
    })
    .then(() => {
      window.location = '#timeline';
    });
};

const profile = (props) => {
  const user = props.user || {};
  const templateProfile = `
    ${Input({
    class: 'navigation',
    id: 'navigation',
    type: 'checkbox',
  })}
      <label for="navigation">&#9776;</label>
      <nav class="menu">
          <ul>
      ${List({
    class: 'timeline',
    title: 'Timeline',
    onClick: goTimeline,
  })}
      ${List({
    class: 'out',
    title: 'Sair',
    onClick: signOut,
  })}
          </ul>
        </nav>
    <h1 class="title-timeline">Low Carb Style</h1>
    <p class="text-profile">Insira seus dados pessoais aqui...</p>
    <form>
    <div class="container-form-profile">
        ${Input({
    class: 'inp-name-profile',
    id: 'inp-name-profile',
    type: 'text',
    value: user.name || '',
    placeholder: 'Seu nome...',
  })}
        ${Input({
    class: 'inp-age-profile',
    id: 'inp-age-profile',
    type: 'number',
    value: user.age,
    placeholder: 'Sua idade...',
  })}
        ${Input({
    class: 'inp-profession-profile',
    id: 'inp-profession-profile',
    type: 'text',
    value: user.profession || '',
    placeholder: 'Sua profissão...',
  })}
        ${Button({
    class: 'btn-profile',
    id: 'btn-profile',
    type: 'submit',
    title: 'Salvar Perfil',
    onClick: updateProfile,
  })}
    </div>
    </form>
    <p class="dados-usuario">
    </p>
    `;
  return templateProfile;
};

export default profile;
