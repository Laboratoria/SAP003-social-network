import Button from '../components/button.js';
import Input from '../components/input.js';

function userRegister() {
    const nome = document.querySelector('.nome-input').value;
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.senha-input').value;
    console.log(nome, email, password);
   
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.location.href = '#feed';
    }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
    });
}

function backPage() {
    window.location.href = '#login';
}
function Register() {
    const template = `
        <header>
        <img src = "/images/logo.png" alt="logo" class="logo">
        </header>
        <form class="form-register">
        <h2 class="cad"> Cadastre-se!</h2>
        <h1 class="top-banner">Você mais conectada(o) com a Astronomia! </h1>

            ${Input({
                class: 'nome-input',
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
                placeholder: 'Senha',
                type: 'password',
                })}
            ${Button({
                id: 'btn-cadastro',
                title: 'Criar conta',
                onClick: userRegister,
                })}
            ${Button({
                id: 'btn-voltar',
                title: 'Voltar',
                onClick: backPage,
                })}    
        </form>
    `;    
    return template;
}
export default Register;