import Input from '../components/input.js';
import Button from '../components/button.js';

// como colocar opção de foto?

function Perfil() {
    const template = `
    <img src="" alt="">
    <div class="container-perfil">
    <h1 class= "título-perfil">Perfil</h1>
    <h3> Editar perfil</h3>
    <form> 

    ${Input({
        class: 'js-nomePerfil-input',
        placeholder: 'Nome e sobrenome',
        type: 'text',
      })}
  
     ${Input({
      class: 'js-biografiaPerfil-input',
      placeholder: 'Biografia',
      type: 'text',
    })}
  
     ${Input({
      class: 'js-localizacaoPerfil-input',
      placeholder: 'Localização',
      type: 'text',
    })}
  
     ${Button({
      id: 'Botão',
      title: 'Enviar',
      // onClick: enviarPerfil,
    })}
  
      </form>
      <p> <a href="#home">Voltar a Home</a> </p>
      </div>
  
    `;
  
    return template;
  }
  
  export default Perfil;
  

  //<p class="mensagem-login">Não tem conta? <a href="#cadastro">Cadastre-se</a> </p>