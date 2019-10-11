function LogInFace(props) {
    const template = `
      <button class="face-log" onclick="LogInFace.handleClick(${props.onClick})"/>${props.title}`;
      ;
  
    return template;
  }
  
window.LogInFace = {
  handleClick: (id) => {
    return id();
  },
};

  
  export default LogInFace;
