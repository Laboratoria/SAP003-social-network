function Button(props) {
  return `<button class="primary-button" onclick="button.handleClick(event, '${props.id}')" >${props.title}</button>`;
}

window.button = {
  handleClick: (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  },
};

export default Button;
