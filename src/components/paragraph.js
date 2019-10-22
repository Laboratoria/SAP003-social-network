const Paragraph = (props) => {
    const template = `
    <p
    data-id='${props.dataId}'
    class='${props.class}'
    text='${props.post}'>
    </p>
  `;
    
    return template;
  };
  export default Paragraph;
  