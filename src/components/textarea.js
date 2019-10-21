const Textarea = (props) => {
  const template = `
    <textarea rows="10" cols="55"
    class="${props.class}"
    id="${props.id}"
    placeholder="${props.placeholder}"></textarea>
    `;

  return template;
};

export default Textarea;
