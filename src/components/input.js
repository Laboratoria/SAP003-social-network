const Input = (props) => {
  const template = `
    <input
    class="${props.class}"
    id="${props.id}"
    value="${props.value}"
    placeholder="${props.placeholder}"
    type="${props.type}" required>
    `;

  return template;
};

export default Input;
