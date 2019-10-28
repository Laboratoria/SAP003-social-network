import Button from '../components/button.js';

 function changePg() {
  window.location.href = '#feed';
} 

function Profile(props) {
  const template = `
    <header>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox"/> 
          <span></span>
          <span></span>
          <span></span>  
          <ul id="menu">
            <a href="#profile"><li>Perfil</li></a>
            <a href="#readme"><li>Sobre</li></a>
            <a href="#login"><li>Sair</li></a>
          </ul>
        </div>
      </nav>
    </header>
    <div class="description">
      <img class="avatar" src="./images/img-avatar.jpeg">
      <p class="email-display">${firebase.auth().currentUser.email}</p>
    <section class="box-profile">
      ${Button({class:'voltar', title: 'Voltar', onclick: changePg})}
    </section>`;

  return template;
}

export default Profile;