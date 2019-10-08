import Button from '../components/button.js';
import Input from '../components/input.js';
import Label from '../components/label.js';

function Home(){
  const template = `
      <h2> Crie a sua conta </h2>
<form> 
     ${Input(
       { placeholder: 'Nome completo',
       type: 'text'}
     )}
     ${Input(
       { placeholder: 'E-mail',
       type: 'email'}
     )}
     ${Input(
       { placeholder: 'Senha',
       type: 'password'}
     )}
     ${Input(
       { placeholder: 'Data de Nascimento',
       type: 'number'}
     )}
     ${Label(
       { message: 'Gênero'}
     )}
     ${Input(
       { type: 'radio'}
     )}

     ${Button(
       { id: 'button',
       title: 'Cadastrar' }
     )}
</form>
     `;
    return template;
}

export default Home;

//${Button({ id: '🎉', title: 'Botão 🎉' })}
