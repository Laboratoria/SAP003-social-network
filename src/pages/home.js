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

    <section class="posts"></section>
  `;
  return template;
}

function btnPrint(event) {
  event.preventDefault()
  const textArea = document.querySelector('.txtArea')
  // console.log(valueTextarea)

  const post = {
    msg: textArea.value,
    coments: [],
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }

  //db.collection('posts').add({
  //    msg: valueTextarea,
  //    // first: 'Ada',
  //    // last: 'Lovelace',
  //    // born: 1815
  //  })
  //  .then(function (docRef) {
  //    console.log('Document written with ID: ', docRef.id);
  //  })
  //  .catch(function (error) {
  //    console.error('Error adding document: ', error);
  //  });

  firebase.firestore().collection('posts').add(post).then(res => {
    textArea.value = ''
    loadData()
  })

}

function loadData() {
  const postColletion = firebase.firestore().collection("posts")
  const postList = document.querySelector('.posts')
  postList.innerHTML = 'Carregando...'
  postColletion.get().then(snap => {
    snap.forEach(post => {
      printPosts(post)
    })
  })

}

function printPosts(post) {
  const postList = document.querySelector('.posts')
  const postTemplate = `
    <p>
    ${post.data().timestamp.toDate().toLocaleString('pt-BR')}:
      ${post.data().text},
    </p>
  `
  postList.innerHTML += postTemplate

  //  db.collection("posts").get().then((querySnapshot) => {
  //    querySnapshot.forEach((doc) => {
  //      prints.innerHTML += `${doc.id} => ${doc.data()}`;
  //      // console.log(`${doc.id} => ${doc.data()}`);
  //    });
  //  });
}








export default Home;