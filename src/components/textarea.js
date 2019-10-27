const Textarea = (props) => {
  const template = `
    <textarea rows="6" cols="40"
    class="${props.class}"
    id="${props.id}"
    placeholder="${props.placeholder}"></textarea>
    `;

  return template;
};

export default Textarea;
