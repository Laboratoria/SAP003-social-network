function Input(props) {
  const template = `
      <input type="${props.type}" class="${props.class} entrada"  placeholder="${props.placeholder}"/>
    `;

  return template;
}

export default Input;
