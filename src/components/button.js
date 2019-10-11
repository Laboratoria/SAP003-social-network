function Button(props) {
  const template = `
    <button 
    class="primary-button"
     onclick="button.handleClick(event, ${props.onClick})" >
     ${props.title}
     </button>
  `;

  return template;
}
window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();

    // console.log(`Esse é o meu botão ${id}`);
    // return `Esse é o meu botão ${id}`;
  },
};

export default Button;
