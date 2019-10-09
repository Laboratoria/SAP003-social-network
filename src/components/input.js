function Input(props) {
  const template = `
    <input type=${props.type} placeholder="${props.placeholder}" class="${props.class}"><br>
    `;

  return template;
}

window.input = {
  handleClick: id => `Esse é o meu botão ${id}`,
};

export default Input;
