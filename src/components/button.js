function Button(props) {
  const template = `
    <button class="${props.class}" onclick="button.handleClick(event, '${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  },
};

export default Button;
