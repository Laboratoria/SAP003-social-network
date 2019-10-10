function ButtonAuth(props) {
  const template = `
    <button class="auth-button" onclick="button.handleClick(event, ${props.onClick})" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
};

export default ButtonAuth;
