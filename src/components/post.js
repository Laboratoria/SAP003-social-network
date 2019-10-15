function Post(props) {
  return `<div class="post" id="${props.id}">
  <spam class="post-username">${props.username}</spam>
  <spam class="post-date">${props.date}</spam>
  <spam class="post-text">${props.text}</spam>
  </div>`;
}

export default Post;
