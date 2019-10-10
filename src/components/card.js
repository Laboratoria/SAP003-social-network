 
function Card(props) {
  return `
    <div class="card">
      ${props.children}
    </div>
  `;
}

export default Card;