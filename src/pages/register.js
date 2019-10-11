  function createLogin() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => alert(`Bem vindo ` + email))
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert(`Falha ao cadastrar, verifique o erro no console`)
      });
      }

  window.location.href = '#register';
export default createLogin;

