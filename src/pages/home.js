import Button from '../components/button.js';
import Input from '../components/input.js';

// function Home() {
//   const template = `
//     <h1>Home Page</h1>
//     ${Button({ id: '🐠', title: 'Botão 🐠' })}
//     ${Button({ id: '🎉', title: 'Botão 🎉' })}
//     <p>Esse é um exemplo 🍌</p>
//   `;

//   return template;
// }

// export default Home;

function signInWithEmailAndPassword() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password)

    .then((logedin) => {
      alert(`Bem vindo ${email}`);
      window.location.hash = '#newpage';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Usuario nao cadastrado');
      window.location.hash = '#register';

    // ...
    });email - password.html
}

function Login() {
  const template = `
  <h1>entrar </h1>
  ${Input({
    class: 'js-email-input',
    placeholder: 'Email',
    type: 'email',
  })}
  ${Input({
    class: 'js-password-input',
    placeholder: 'Senha',
    type: 'password',
  })}
<br>
<br>
  ${Button({
    id: 'LoginAccount',
    title: 'Entrar',
    onClick: signInWithEmailAndPassword,
  })}
`;
  return template;
}

export default Login;

