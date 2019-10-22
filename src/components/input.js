function Input(props) {
  const template = `
    <input
      data-id="${props.dataId}"
      class="${props.class} primary-input"
      placeholder="${props.placeholder}"
      type="${props.type}" />
  `;

  return template;
}

export default Input;
