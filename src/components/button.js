const Button = (props) => {
  const template = `
    <button type= ${props.type} class="primary-button" onclick="button.handleClick(event,${props.onClick})">
    ${props.title}</button>`;

  return template;
}

window.button = {
  handleClick: (event, callBack) => {
    event.preventDefault();
    callBack();

  },
};

export default Button;

