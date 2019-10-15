const Post = (post) => {
  const template = `
  <div class="container-public">
    <p class='publication'>${post.text}</p>
  </div>`;

  return template;
};

export default Post;
