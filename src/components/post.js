function Post(props) {
  return `<div class="post" id="${props.id}">
  <span class="post-username">${props.username}</span>
  <span class="post-date">${props.date}</span>
  <span class="post-text">${props.text}</span>
  </div>`;
}

export default Post;
