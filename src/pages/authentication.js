function AuthEmailPassButton() {
  const email=document.querySelector('.js-email-input').value;
  const password=document.querySelector('.js-password-input').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log(result);
      displayName.innerText = 'Bem vindo, ' + email;
      alert('Autenticado ' + email);
  })
  .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, verifique o erro no console.')
  });
}

window.location.href='#authentication'
export default AuthEmailPassButton;
