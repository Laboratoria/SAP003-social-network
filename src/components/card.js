function Card(props) {
  const template = `
    <div class="card">${props.children}</div>
  `;
  return template;
}

export default Card;
