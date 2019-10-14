import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

let db = firebase.firestore();

function publish(){

}


function feed() {
  const template = `
    <img src="../../imagens/logo.png"></img class="image-logo">
    ${Textarea({id: 'post', class: 'post', call: publish})}
    ${Button({ id: 'publish', title: 'Publish' })}
    `;

  return template;
}

export default feed;

// location.hash = "#Feed";