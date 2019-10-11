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
    ${Input({ class:'js-edade-input', placeholder:'Idade', type:'text', })}
    ${Input({ class:'js--input', placeholder:'Apelido', type:'text', })}
    ${Input({ class:'js--input', placeholder:'Professor(a) ou  aluno', type:'text', })}
    ${Button({title: 'Salvar', onClick: salve})}
    </form>`;
  
  return template;
}
  
export default Perfil;
