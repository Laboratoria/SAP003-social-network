function Label(props) {
  const template = `
    <label> '${props.message}'</label>
  `;

  return template;
}

export default Label;
