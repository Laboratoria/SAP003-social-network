import Button from '../components/button.js';
import Input from '../components/input.js';

function userRegister() {
    const nome = document.querySelector('.nome-input').value;
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.senha-input').value;
    console.log(nome, email, password);
   
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        debugger
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
        <header class="header-reg">
        <img src = "./images/transparent.png" alt="logo" class="logo">  
        <h1 class="top-banner">Você mais conectada(o) com a Astronomia! </h1>

        </header>
        <form class="form-register">
        <p class="cad"> Cadastre-se!</p>
            ${Input({
                class: 'nome-input',
                placeholder: 'Nome: Henrietta Swan Leavitt',
                type: 'text',
                })}
            ${Input({
                class: 'email-input',
                placeholder: 'E-mail: henrietta@gmail.com',
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