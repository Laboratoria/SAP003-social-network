const Input = (props) => {
  const template = `
    <input type=${props.type} placeholder="${props.placeholder}" class="${props.class}"><br>
    `;

  return template;
}

export default Input;
