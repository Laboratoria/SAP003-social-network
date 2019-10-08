function Input(props) {
  const template = `
    <input placeholder="${props.placeholder}", type="${props.type}", name="${props.name}"><br>
  `;

  return template;
}

export default Input;
