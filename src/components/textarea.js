function Textarea(props) {
    const template = `
    <textarea
     class ="primary-textarea ${props.class}"
     placeholder="${props.placeholder}"
     type="${props.type}"></textarea>
  `;
    return template;
  }
  
  export default Textarea;
  