function Button(props) {
  const template = `
    <button class='${props.class}' onclick="button.handleClick(event, ${props.onclick})">${props.title}</button>
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

//passar o evento no callback e passo na funçñao de deletar/editar