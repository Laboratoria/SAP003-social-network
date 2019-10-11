import Button from '../components/button.js';

function SignOut () {
  firebase.auth().signOut().then(function() { alert ('Sign-out successful.') })};

function Home() {
  const template = `
    <h1>Home Page</h1>
  ${Button({ id: 'singOut', title: 'Sair', onClick: SignOut})}
    <p>Esse é um exemplo 🍌</p>
    <a href='#login'></a>
  `;
 
  return template;
}

export default Home;