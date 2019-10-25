import Button from '../components/button.js';
import Input from '../components/input.js';

function salve() {
  window.location.hash = '#feed';
}

function Profile() {
  const template = `
  <h1>Perfil</h1>
  ${Button({
    title: 'Feed',
    class: 'primary-button',
    onClick: salve,
  })}<br><br>
  <form>
  ${Input({
    class: 'js-photo-input',
    placeholder: 'Foto',
    type: 'file',
  })}<br><br>
  ${Input({
    class: 'js-name-input',
    placeholder: 'Nome',
    type: 'text',
  })}<br><br>
  ${Input({
    class: 'js-age-input',
    placeholder: 'Idade',
    type: 'text',
  })}<br><br>
  ${Input({
    class: 'js-civilstatus-input',
    placeholder: 'Estado Civil',
    type: 'text',
  })}<br><br>
  <label> Front-End ${Input({
    class: 'js-interests-check',
    name: 'interests',
    type: 'checkbox',
    value: 'Front-End',
  })}</label>
  <label> Back-End ${Input({
    class: 'js-interests-check',
    name: 'interests1',
    type: 'checkbox',
    value: 'Back-End',
  })}</label>
  <label> Inteligência Artificial ${Input({
    class: 'js-interests-check',
    name: 'interests2',
    type: 'checkbox',
    value: 'Inteligência Artificial',
  })}</label>
  <label> UI-UX ${Input({
    class: 'js-interests-check',
    name: 'interests3',
    type: 'checkbox',
    value: 'UI-UX',
  })}</label>
  <label> Outros... ${Input({
    class: 'js-interests-check',
    name: 'interests4',
    type: 'checkbox',
    value: 'Outros...',
  })}</label><br>
  ${Button({
    class: 'primary-button',
    title: 'Salvar',
    onClick: salve,
  })}
  </form>`;

  return template;
}

export default Profile;
