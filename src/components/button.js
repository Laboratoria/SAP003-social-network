function Button(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick(event)" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event) => {
    event.preventDefault()
    const email = document.querySelector('.input-email').value
    const password = document.querySelector('.input-password').value
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function() {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // ...
    });
  },
};

export default Button;
