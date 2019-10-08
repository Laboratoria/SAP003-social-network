function Button(props) {
  const template = `
    <button type= ${props.id} class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event, id) => {
    event.preventDefault();
   
    return `Esse é o meu botão ${id}`;
    //firebase.auth(email, senha)
  },
};

export default Button;
