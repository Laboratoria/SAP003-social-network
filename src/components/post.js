import Button from './button.js';


const Post = (props) => {
  const template = `
  <div class="container-public">
    <p data-id='${props.id}' contentEditable="true" class='publication'>${props.post.text}
    </p>
    ${Button({
    class: 'delete-post',
    dataId: props.id,
    title: 'X',
    onClick: props.deleteEvent,
  })} 
  </div>`;

  return template;
};

export default Post;
