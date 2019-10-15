import Button from '../components/button.js';
import Input from '../components/input.js';

function userRegister() {
    const nome = document.querySelector('.nome-input').value;
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.senha-input').value;

    console.log(nome, email, password);
    window.location.href = '#feed';
    firebase.auth().createUserWithEmailAndPassword(email, password).cath((error) => {
        //lidar e inserir mensagem de erro 
        const errorCode = error.code;

        console.log(errorCode);
    });
}

function backPage() {
    window.location.href = '#login';
}
function Register() {
    const template = `
        <h1> Preencha os campos para realizar o cadastro!</h1>
        <form>
            ${Input({
                class: 'name-input',
                placeholder: 'Nome',
                type: 'text',
                })}
            ${Input({
                class: 'email-input',
                placeholder: 'E-mail',
                type: 'text',
                })}
            ${Input({
                class: 'senha-input',
                placeholder: 'password',
                type: 'password',
                })}
            ${Button({
                id: 'cadastro',
                title: 'Criar conta',
                onClick: userRegister,
                })}
            ${Button({
                id: 'voltar',
                title: 'voltar',
                onClick: backPage,
                })}    
        </form>
    `;    
    return template;
}
export default Register;