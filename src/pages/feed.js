import Button from '../components/button.js';
import Input from '../components/input.js';


function timeline(){
    const template = `
    <form>
    ${Input({placeholder:'Digite sua mensagem', type: 'text', class:'post'})}
    ${Button({type:'submit', title: 'postar', onclick:publish})}
    </form>
    <div></div>
    `
      return template;
  }

  export default timeline;

  document.getElementById("publish").addEventListener("click", tweet);
function publish() {
    let postStay= []
    let tweet= document.getElementById("tweet").value;
    document.querySelector('.post').innerHTML= `${PostStay}`;
    localStorage.setItem("message", tweet);
}