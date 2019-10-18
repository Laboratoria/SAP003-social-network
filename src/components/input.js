function Input(props) {
  const template = `
    <input type=${props.type} class=${props.class} placeholder=${props.placeholder} value="${props.value}" >
    `;
  return template;
}

export default Input;
