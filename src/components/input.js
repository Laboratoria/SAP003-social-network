function Input(props) {
  const template = `
  <input
   class ="primary-input ${props.class}"
   placeholder="${props.placeholder}"
   type="${props.type}"/>
`;
  return template;
}

export default Input;
