function Button(props) {
  const template = `
  <button class="primary-button" onclick="handleClick('${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.handleClick = (id) => {
  alert(`Esse é o meu botão ${id}`);
};

export default Button;
