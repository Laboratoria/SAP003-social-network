function Button(props) {
  const template = `
    <button type= ${props.id} class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event, callBack) => {
    event.preventDefault();
   callBack();
   
  },
};

export default Button;

