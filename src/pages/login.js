import Button from '../components/button.js';
import Input from '../components/input.js';
import logo from '../components/logo.js'
// import Register from '../components/register.js'

const loginUser = () => {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
        console.log(email)
        // window.location.replace(Register)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
      });
};

const Login = () => {
    const template = `
    <section>
    ${logo({ img: 'image/logo.png', classImg: 'logo', classP: 'text-logo', text: 'MusicalSpace'})}
    <form class="container">
    ${Input({ type: 'email', placeholder: 'Email', class: 'js-email-input primary-input' })}
    ${Input({ type: 'password', placeholder: 'Password', class: 'js-password-input primary-input' })}
    ${Button({type: 'submit', title: 'Login', onClick: loginUser})}
    </form>
    </section>
    `;
    return template;
}

export default Login;
