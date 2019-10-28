function Input(props) {
  const template = `
      <input ${props.required}
        class="${props.class} primary-input"
        placeholder="${props.placeholder}"
        type="${props.type}" />
    `;

  return template;
}

window.input = {
  Input,
};

export default Input;
