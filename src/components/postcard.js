function PostCard(props) {
    const template = `
    <li data-id=${props.dataId} class="card">
      <ul class = "card-time">${props.time}</ul>
      <ul class = "card-name">${props.name}</ul>
      <ul class = "card-post">${props.post}</ul>
    </li>
    `;
    return template;
}
export default PostCard;
