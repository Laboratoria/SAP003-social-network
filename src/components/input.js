function Input(props) {
    const template = `<input type= '${props.type}' 
    placeholder= '${props.placeholder}'
    class= '${props.class}'/>`
      ;
  
    return template;
  }
  
  
  export default Input;