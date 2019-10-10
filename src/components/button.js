function Button(props) {
  const template = `
    <button class='primary-button'  id='${props.id}' onclick='button.handleClick(${props.call})' >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
};

export default Button;
