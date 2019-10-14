function Input(props) {
  const input = `
  <input 
      class = "input"
      id = "${props.id}"
      placeholder = "${props.placeholder}"
      type = "${props.type}"/>
  `;
  return input;
}

export default Input;
