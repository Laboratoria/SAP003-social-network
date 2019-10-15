const Input = (props) => {
  const template = `
    <input
    class="${props.class} input"
    id="${props.id}"
    placeholder="${props.placeholder}"
    type="${props.type}" />
    `;

  return template;
};

export default Input;
