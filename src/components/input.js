function Input(props) {
    const template = `
      <textarea
        class="${props.class} message-area"
        placeholder="${props.placeholder}"
        type="${props.type}" ></textarea>
`;
  
    return template;
  }
  
  export default Input;