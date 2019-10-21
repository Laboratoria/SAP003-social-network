function Input(props) {
  const template = `
    <input class="${props.class}" placeholder="${props.placeholder}" type="${props.type}" name="${props.name}"><br>
  `;

  return template;
}

export default Input;
