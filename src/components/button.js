function Button(props) {
  const template = `
    <button 
      class="primary-button" 
      onclick="button.handleClick(event, ${props.onClick})" >

      ${props.title}
    </button>
 
  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    const email = document.querySelector('.js-email').value;
    const senha = document.querySelector('.js-senha').value;
    console.log( email,senha);
  },
};

export default Button;

