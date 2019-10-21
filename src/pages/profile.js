import Input from '../components/input.js';
import List from '../components/list-menu.js';
import Button from '../components/button.js';

const goTimeline = () => {
    window.location = '#timeline';
  };
  
const signOut = () => firebase.auth().signOut();

const saveData = () => {
    const nameUser = document.querySelector(".inp-name-profile");
    const ageUser = document.querySelector(".inp-age-profile");
    const professionUser = document.querySelector(".inp-profession-profile");   
    document.querySelector(".dados-usuario").innerHTML =  `${nameUser.value}, ${ageUser.value}, ${professionUser.value}`
}

const profile = () => {
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
    <div class="container-form-profile">
        ${Input({
            class: 'inp-name-profile',
            id: 'inp-name-profile',
            type: 'text',
            placeholder: 'Seu nome...',
        })}
        ${Input({
            class: 'inp-age-profile',
            id: 'inp-age-profile',
            type: 'number',
            placeholder: 'Sua idade...',
        })}
        ${Input({
            class: 'inp-profession-profile',
            id: 'inp-profession-profile',
            type: 'text',
            placeholder: 'Sua profissão...',
        })}
        ${Button({
            class: 'btn-profile',
            id: 'btn-profile',
            type: 'submit',
            title: 'Salvar Perfil',
            onClick: saveData,
        })}
    </div>
    `;  
    return templateProfile;
};

export default profile;
  