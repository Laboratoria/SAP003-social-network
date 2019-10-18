const Input = (props) => {
  const template = `
    <input
    class="${props.class}"
    id="${props.id}"
    placeholder="${props.placeholder}"
    type="${props.type}" required>
    `;

  return template;
};

export default Input;
