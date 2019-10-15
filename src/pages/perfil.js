import Button from '../components/button.js';
import Input from '../components/input.js';

function salve (){
  window.location.hash = '#feed'
}

function Perfil() {
  const template = `
    <h1>Perfil</h1>
    <form>
    ${Input({ class:'js-name-input', placeholder:'Nome', type:'text', })}
    ${Input({ class:'js-age-input', placeholder:'Idade', type:'text', })}
    ${Input({ class:'js-civilstatus-input', placeholder:'Estado Civil', type:'text', })}
    ${Input({ class: 'js-interests-check', name:'interests', type:'checkbox', value: 'Front-End' })}
    ${Input({ class: 'js-interests-check',name:'interests1', type:'checkbox', value: 'Back-End'})}
    ${Input({ class: 'js-interests-check', name:'interests2', type:'checkbox', value: 'Inteligência Artificial' })}
    ${Input({ class: 'js-interests-check', name:'interests3', type:'checkbox', value: 'UI-UX' })}
    ${Input({ class: 'js-interests-check', name:'interests4', type:'checkbox', value: 'Outros...' })}
    ${Button({class: 'primary-button', title: 'Salvar', onClick: salve})}
    </form>`;

  return template;
}

export default Perfil;
