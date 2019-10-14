function Input(props) {
  const template = `
    <input placeholder="${props.placeholder}", type="${props.type}", class="${props.class}"><br>
  `;

  return template;
}

export default Input;
