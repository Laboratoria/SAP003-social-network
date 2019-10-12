import Post from './post.js';

function PostsContainer(props) {
  return `<div id="feed" class="feed">${props.content}</div>`;
}

window.postsContainer = {
  iteratePosts: (arr) => {
    arr.map(item => Post({ content: item }));
  },
};

export default PostsContainer;
