function Textarea(props) {
  const template = `
      <textarea class= '${props.class}' rows='5' cols='33' value ="${props.text}"> </textarea>
    `;

  return template;
}

export default Textarea;
