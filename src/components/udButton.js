const actionButton = (props) => {
    const template = `
      <button type= ${props.type} class=${props.class} name=${props.name} id=${props.id}
      onclick="button.handleClick(event,${props.onClick})"> ${props.title}</button>`;
  
    return template;
  };
  
  window.button = {
    handleClick: (event, callBack) => {
      event.preventDefault();
      event.target.id;
      callBack();
    },
  };
  
  export default actionButton;