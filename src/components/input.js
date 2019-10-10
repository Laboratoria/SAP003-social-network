function Input(props) {
  const input = `
  <input 
      class = "${props.class}"
      placeholder = "${props.placeholder}"
      type = "${props.type}"/>
  `;
  return input;
}

export default Input;
