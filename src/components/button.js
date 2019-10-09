function Button(props) {
  const template = `
    <button 
      class="primary-button" 
      onclick="button.handleClick(${props.onClick})" >
      ${props.title}
    </button>
  `;

  return template;
}

window.button = {
  handleClick: (callback) => {
    callback();
  },
};

export default Button;
