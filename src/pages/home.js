import Button from '../components/button.js';

function btnSignOut() {
  firebase.auth().signOut().then(function () {
    window.location = '#login';
  }).catch(function (error) {
    // An error happened.
  });
}



function btnPrint() {
  //const firestore = firebase.firestore()

  const valueTextarea = document.querySelector('.txtArea').value;
  //const printaMsg = document.querySelector('printa')
  console.log(valueTextarea)

}

function Home() {
  const template = `
    <nav class="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Perfil</a></li>
        <li><a href="#timeline">Postagens</a></li>
      </ul>
      ${Button({ id: 'btn-exit', title: 'SAIR', onClick: btnSignOut })}
    </nav>

    <nav>
      <h3>Escreva aqui<h3>
      <textarea class="txtArea" rows="5" cols="60"></textarea>
      ${Button({ id: 'btn-print', title: 'PRINTA JESUS', onClick: btnPrint })}
    </nav>
    
    <h1>Essa é a sua timeline</h1>

    <p class="printa"></p>
   
  `;
  return template;
}

function Print() {

}


export default Home;