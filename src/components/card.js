function Card(props) {
  const template = `
    <div class="card" id=${props.id}>${props.children}</div>
  `;
  return template;
}

export default Card;
