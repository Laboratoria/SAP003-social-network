import Button from './button.js';
import ButtonImage from './image-button.js';


const Post = (props) => {
  const template = `
  <div class="container-public">
    <div class="date-public">
      <p data-id='${props.id}' class='date-post'>${props.post.addedAt.slice(0, 16)}</p> 
    </div>
    <div class="publication-public">
      <p data-id='text-${props.id}' class='publication'>${props.post.text}</p>
      <hr>
      <p data-id='${props.id}' class='likes'>${props.post.like}</p>
      <p data-id='${props.id}' class='text-privacy'>${props.post.privacy}</p>
    </div>
    <div class="info-post">
    ${ButtonImage({
    class: 'like-post',
    dataId: props.id,
    type: 'image',
    src: 'images/curtir.png',
  })} 
    ${Button({
    class: 'edit-post',
    dataId: props.id,
    title: 'Editar',
    onClick: props.enableEvent,
  })} 
    ${Button({
    class: 'save-post',
    dataId: props.id,
    title: 'Salvar',
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
