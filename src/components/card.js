function Card(props) {
  const template = `
    <div class="card">${props.texto}</div>
  `;
  return template;
}

export default Card;
