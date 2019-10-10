import Button from '../components/button.js';

function btnSignOut() {
  firebase.auth().signOut().then(function() {
      console.log('já sai')    
  }).catch(function(error) {
    // An error happened.
  });
}

function Home() {
  const template = `
    <h1>ESSA É A HOMEEEEE 🎉 🎉 🎉</h1>
    ${Button({ id: 'btn-exit', title: 'SAIR', onClick: btnSignOut })}
  `;

  return template;
}



export default Home;