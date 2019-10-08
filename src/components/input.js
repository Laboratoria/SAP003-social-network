function Input(props) {
  const template = `
    <input class="input" 
      placeholder=${props.placeholder} 
      type=${props.type}  
      id=${props.id}
    >
  `;
  return template;
}

export default Input;
