import ButtonRegister from '../components/buttonre.js';
import input from '../components/input.js';

function Register() {
    const template = `
      
      <h1>Register</h1>
      <form>
      ${input({class: 'name', placeholder: 'name', type: 'text'})}
      ${input({class: 'email-re', placeholder: 'email', type: 'email'})}
      ${input({class: 'password-re', placeholder: 'password', type: 'password'})}
      </form>
      ${ButtonRegister({ class:'btn-register', title: 'REGISTRAR' })}
    `;
  
    return template;
  }

/* const userEmail = document.querySelector(".email-re");
const userName = document.querySelector(".name");
const userPass = document.querySelector("password-re");
const registerBtn = document.querySelector(".btn-register");

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser){
        console.log(firebaseUser)
    } else {
        console.log("not loggin in");
    }
});


 registerBtn.addEventListener("click", () =>{
    const email = userEmail.value;
    const name = userName.value;
    const pass = userPass.value;
    const auth = firebase.auth();
    
    const promise = auth.createUserWithEmailAndPassword(email, pass, name);  
    promise.catch(e => console.log(e.message));

  
})
 */

const userEmail = document.querySelector(".email-re");
const userName = document.querySelector(".name");
const userPass = document.querySelector("password-re");
const registerBtn = document.querySelector(".btn-register");

registerBtn.addEventListener('click', () =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail.value, userPass.value)
    .then(() => {
        alert("valeu" + userName.value);
    })
    .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert("falha ai");
    } )
})


  export default Register;