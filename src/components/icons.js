function Icons(props) {
    const template = `
      <button
<<<<<<< HEAD
        class="primary-icon-${props.class}" 
        id= ${props.id}
=======
        class="primary-icon" 
        data-id= ${props.dataId}
>>>>>>> bca49c53d49b2a4940e2ad3b4c2aa4525e8be3e0
        onclick="button.handleClick(event, ${props.onClick})" >
        ${props.title}
      </button>
    `;
    return template;
  }
  window.icons = {
    handleClick: (event, callback) => {
      event.preventDefault();
      callback(event);
    },
  };
  export default Icons;