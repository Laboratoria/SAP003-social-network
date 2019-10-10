
function ButtonRegister(props) {
    const template= `
      <button class= "${props.class}" onclick="">${props.title}</button>
    `;
    return template;
  }
  export default ButtonRegister();