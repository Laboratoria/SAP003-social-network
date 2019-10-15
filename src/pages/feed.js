import Button from '../components/button.js';
import Input from '../components/input.js';


function timeline(){
    const template = `
    <form>
    ${Input({placeholder:'Digite sua mensagem', type: 'text', class:'post'})}
    ${Button({type:'submit', title: 'postar'})}
    </form>
    <div></div>
    `
      return template;
  }

  export default timeline;


