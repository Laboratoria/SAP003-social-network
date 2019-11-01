function Button(props) {
  const template = `
    <button data-id='${props.dataId}' class="${props.class}" onclick="Button.handleClick(event, ${props.onclick})">${props.title}</button>
  `;
  return template;
}

window.Button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
  component: Button,
};


export default Button;

