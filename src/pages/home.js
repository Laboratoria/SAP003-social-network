import Button from '../components/button.js';

function btnSignOut() {
  firebase.auth().signOut().then(function () {
    window.location = '#login';
  }).catch(function (error) {
    // An error happened.
  });
}

function Home() {
  const template = `
    <nav class="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Perfil</a></li>
        <li><a href="#timeline">Postagens</a></li>
        <li> ${Button({ id: 'btn-exit', title: 'SAIR', onClick: btnSignOut })}</li>
      </ul>
    </nav>
    <h1>Essa é a sua timeline</h1>
   
  `;
  return template;
}

export default Home;