function Textarea(props) {
  const template = `
      <textarea data-id = '${props.dataId}' class= '${props.class}' rows='5' cols='33' value ="${props.text}"> </textarea>
      `;

  return template;
}

window.textarea = {
  component: Textarea,
};

export default Textarea;
