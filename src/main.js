import Button from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Button();
}

window.addEventListener('load', init);

// function button(){
//   document.getElementById('button').submit();
// }
