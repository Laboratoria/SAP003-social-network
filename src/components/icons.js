function Icons(props) {
    const template = `
      <button
        class="primary-icon-${props.class}" 
        id= ${props.id}
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