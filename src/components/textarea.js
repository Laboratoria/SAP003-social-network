function Textarea(props) {
  const template = `
      <textarea class= '${props.class}' rows='5' cols='33' id='${props.id}'> </textarea>
    `;

  return template;
}

export default Textarea;
