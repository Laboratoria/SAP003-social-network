function Button(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (id) => {
    console.log(`Esse é o meu botão ${id}`);
    return `Esse é o meu botão ${id}`;
  },
};

export default Button;



