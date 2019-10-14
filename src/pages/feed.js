import Button from '../components/button.js';

function Feed() {
  const template =`
    <form>
    <textarea class='Text1' placeholder=''></textarea>
    <p class="login"></p>
    ${Button({ class: 'mytext', onclick: myText, title: 'ENVIAR' })}
    </form>
    `;
    
    return template;
  }
  
  function myText() {
    const textArea = document.querySelector('.Text1').value;
    document.querySelector('.login').innerHTML = textArea;
    console.log(textArea);
  }
  
  export default Feed;
  
