function Button(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
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
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  },
};

export default Button;
