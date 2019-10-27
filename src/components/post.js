import Button from './button.js';
import ButtonImage from './image-button.js';
import Select from './select.js';
import Paragraph from './paragraph.js';

const Post = (props) => {
  const userId = firebase.auth().currentUser.uid;
  let template = `
  <div class="container-public">
    <div class="data-date-public">
    ${Paragraph({
    class: 'name-user',
    dataId: props.id,
    text: props.post.user ? `Publicado por ${props.post.user.name}` : 'Publicado por ...',
  })}
    ${Paragraph({
    class: 'date-post',
    dataId: props.id,
    text: props.post.addedAt.slice(0, 16),
  })} 
    </div>
    <div class="publication-public">
    ${Paragraph({
    class: 'publication',
    dataId: `text-${props.id}`,
    text: props.post.text,
  })} 
  </div>`;
  if (userId === props.post.userId) {
    template += `   
     <div class="info-privacy">
    ${Select({
    class: 'slc-privacy-post',
    dataId: `privacy-${props.id}`,
    selected: props.post.privacy,
    options: [{ value: '🔓', text: 'Público 🔓' }, { value: '🔐', text: 'Privado 🔐' }],
  })}
    </div>
    `;
  }
  template += `<div class="info-post">
  <div class="info-like">
    ${ButtonImage({
    class: 'like-post',
    dataId: props.id,
    type: 'image',
    src: 'images/curtir.png',
    onClick: props.likesEvent,
  })}
    ${Paragraph({
    class: 'likes',
    dataId: `numbers-${props.id}`,
    text: props.post.likes || '',
  })} 
  </div>
  `;

  if (userId === props.post.userId) {
    template += `  
    <div class="info-change">
     ${Button({
    class: 'edit-post',
    dataId: props.id,
    title: 'Editar',
    onClick: props.enableEvent,
  })}  
    `;
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

  template += `
  </div>
  </div>
  </div>`;

  return template;
};

export default Post;
