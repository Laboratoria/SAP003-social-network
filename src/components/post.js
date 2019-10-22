import Button from './button.js';
import ButtonImage from './image-button.js';


const Post = (props) => {
  const userId = firebase.auth().currentUser.uid;
  let template = `
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
  })}`;

  if (userId === props.post.userId) {
    template += Button({
      class: 'edit-post',
      dataId: props.id,
      title: 'Editar',
      onClick: props.enableEvent,
    });

    template += Button({
      class: 'save-post',
      dataId: props.id,
      title: 'Salvar',
      onClick: props.updateEvent,
    });

    template += Button({
      class: 'delete-post',
      dataId: props.id,
      title: 'Deletar',
      onClick: props.deleteEvent,
    });
  }

  template += '</div></div>';

  return template;
};

export default Post;
