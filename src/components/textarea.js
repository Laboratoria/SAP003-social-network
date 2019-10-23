function Textarea(props) {
  const template = `
      <textarea class= '${props.class}' rows='5' cols='33'>${props.text || ''}</textarea>
      `;

  return template;
}

window.textarea = {
  component: Textarea,
};

export default Textarea;
