function Button(props) {
  const template = `
    <button 
    data-id="${props.id}"
    class="primary-button"
    class="${props.class}"
     onclick="button.handleClick(event, ${props.onClick})" >
     ${props.title}
     </button>
  `;

  return template;
}
window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);

    // console.log(`Esse é o meu botão ${id}`);
    // return `Esse é o meu botão ${id}`;
  },
};

export default Button;


