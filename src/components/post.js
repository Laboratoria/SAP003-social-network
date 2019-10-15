function Post(props) {

    const template = `<textarea rows='8'
    cols='50' placeholder='${props.placeholder}'
    class='${props.class}'> </textarea>`;

    return template;
  };


  export default Post;

