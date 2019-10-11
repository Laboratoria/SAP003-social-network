function Input(props) {
  const input = `
  <form class="form">
    <input class="${props.class}" type="${props.type}" " placeholder="${props.placeholder}"/>    
  </form>
  `;
  return input;
}
export default Input;
