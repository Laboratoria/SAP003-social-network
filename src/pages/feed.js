import Button from '../components/button.js';

function SignOut () {
  firebase.auth().signOut().then(function() { 
    window.location.hash = '#login'
    alert ('Agora tu saiu.') 
  })
};

function Home() {
  const template = `
    <h1>Feed</h1>
  ${Button({ id: 'singOut', title: 'Sair', onClick: SignOut})}
    <p>Esse é um exemplo 🍌</p>
  `;
 
  return template;
}

export default Home;