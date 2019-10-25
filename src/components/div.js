function Div(props) {
  const template = `
      <div class="${props.class}">
      ${props.content}
      </div>
    `;

  return template;
}


export default Div;
//export default