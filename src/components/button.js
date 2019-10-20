function Button(props) {
  const template = `
    <button class='${props.class}' data-id='${props.dataId}' onclick="button.handleClick(event, ${props.onclick})">${props.title}</button>
    `;
  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
  component: Button,
};

export default Button;

//passar o evento no callback e passo na funçñao de deletar/editar