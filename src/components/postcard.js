function PostCard(props) {
    const template = `
    <div class="card">
      <p>${props.name}</p>
      <p>${props.post}</p>
    </div>
    `;
    return template;
}
export default PostCard;
