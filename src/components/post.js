import Button from './button.js';


const Post = (props) => {
  const template = `
  <div class="container-public">
  <p data-id='${props.id}' contentEditable="true" class='publication'>${props.post.text}
    </p>
    <div class="info-post">
    <p data-id='${props.id}' class='date-post'>${props.post.addedAt.slice(0, 16)}</p> 
       ${Button({
    class: 'edit-post',
    dataId: props.id,
    title: 'Editar',
    onClick: props.updateEvent,
  })} 
      ${Button({
    class: 'delete-post',
    dataId: props.id,
    title: 'Deletar',
    onClick: props.deleteEvent,
  })} 
  </div>
</div>`;

  return template;
};

export default Post;
