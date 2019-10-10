function Button(props) {
  return `<button class="primary-button" onclick="button.handleClick(event, ${props.onClick})"> ${props.title}</button>`;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
};

export default Button;
