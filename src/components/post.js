import Button from './button.js';


const Post = (props) => {
  const template = `
  <div class="container-public">
    <p data-id='${props.id}' class='publication'>${props.post.text}
    ${Button({
    class: 'delete-post',
    dataId: props.id,
    title: 'Deletar',
    onClick: props.deleteEvent,
  })} </p>
  </div>`;

  return template;
};

export default Post;
