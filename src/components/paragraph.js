const Paragraph = (props) => {
  const template = `
    <p data-id='${props.dataId}' class='${props.class}'> ${props.text} </p>`;
  return template;
};
export default Paragraph;
