function PostCard(props) {
    const template = `
    <li class="card">
      <ul class = "card-name">${props.name}</ul>
      <ul class = "card-post">${props.post}</ul>
      <ul class = "card-time">${props.time}</ul>
    </li>
    `;
    return template;
}
export default PostCard;
