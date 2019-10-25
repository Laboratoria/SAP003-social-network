function Button(props) {
  const template = `
    <button 
    class="primary-button" data-id=${props.dataId}
    onclick="button.handleClick(event, ${props.onClick})" >
    ${props.title}</button>
  `;
  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
  component: Button,
};

export default Button;
