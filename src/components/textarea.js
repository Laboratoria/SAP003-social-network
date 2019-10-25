function Textarea(props) {
  const template = `
  
    <textarea class = ${props.class} 
    placeholder=${props.placeholder}>
    </textarea>
  
  `;
  return template;
}

export default Textarea;
