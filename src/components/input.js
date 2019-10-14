function Input(props) {
  const input = `
  <input 
      class = "primary-input"
      id = "${props.id}"
      placeholder = "${props.placeholder}"
      type = "${props.type}"/>
  `;
  return input;
}

export default Input;
