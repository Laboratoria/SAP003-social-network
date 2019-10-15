function Input(props) {
  const input = `

  <input 
      class = "${props.class}"
      id = "${props.id}"
      placeholder = "${props.placeholder}"
      type = "${props.type}"/>

  `;
  return input;
}

export default Input;
