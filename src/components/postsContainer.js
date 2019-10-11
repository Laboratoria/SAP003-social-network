function PostsContainer (props, arr) {
  return `
    <div id="feed" class="${props.class}">
        ${props.content}
    </div>
`;
}

export default PostsContainer;
