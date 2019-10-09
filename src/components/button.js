function Button(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick(event,'${props.id}')" >${props.title}</button>
  `;
  return template;
}

window.button = {
  handleClick: (event,id) => {
    event.preventDefault();
    
    // console.log(`Esse é o meu botão ${id}`);
    return `Esse é o meu botão ${id}`;
  },
};

export default Button;
