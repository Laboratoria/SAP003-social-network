function LogInGoogle(props) {
    const template = `
      <button class="google-log" onclick="LogInGoogle.handleClick(${props.onClick})"/>${props.title}`;
      ;
  
    return template;
  }
  
window.LogInGoogle = {
  handleClick: (id) => {
    return id();
  },
};

  
  export default LogInGoogle;

  