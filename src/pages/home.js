import Button from '../components/button.js';
import Print from '../components/input.js'
import Input from '../components/input.js';

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
      </ul>
      ${Button({ id: 'btn-exit', title: 'SAIR', onClick: btnSignOut })}
    </nav>

    <section>
      <h3>Escreva aqui<h3>
      <textarea class="txtArea" rows="5" cols="60"></textarea>
      ${Button({ id: 'btn-print', title: 'PRINTA JESUS', onClick: btnPrint })}
    </section>
    
    <h1>Essa é a sua timeline</h1>

    <p class="printa"></p>   
  `;
  return template;
}

function btnPrint() {
  const valueTextarea = document.querySelector('.txtArea').value;
  // console.log(valueTextarea)

  db.collection('posts').add({
    msg: valueTextarea,
    // first: 'Ada',
    // last: 'Lovelace',
    // born: 1815
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });  

}

function printPosts() {
  const prints = document.querySelector('.printa')
  db.collection("posts").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    prints.innerHTML += `${doc.id} => ${doc.data()}`;
      // console.log(`${doc.id} => ${doc.data()}`);
  });
});
}








export default Home;