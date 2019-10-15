import Input from '../components/input.js';
import List from '../components/list-menu.js';

const signOut = () => firebase.auth().signOut();

const timeline = () => {
  const templateTimeLine = `
    ${Input({
    class: 'navigation',
    id: 'navigation',
    type: 'checkbox',
  })}
  <label for="navigation">&#9776;</label>
  <nav class="menu">
      <ul>
    ${List({
    class: 'timeline',
    title: 'Timeline',
  })}
    ${List({
    class: 'profile',
    title: 'Perfil',
  })}
    ${List({
    class: 'out',
    title: 'Sair',
    onClick: signOut,
  })}
      </ul>
    </nav>
    <h1 class="title-timeline">Low Carb Style</h1>
    <img src="images/usuario.png" class="img-usuario">
    <div class="dados-usuario">
      <h3 clas="nome-usuario">Nome</h3>
      <p clas="bio-usuario"><em>Biografia</em></p>
    </div>
    <div class="container-publicar">
      <textarea class="campo-publicar" placeholder="digite aqui..."></textarea>
      <img src="images/img-public.png" class="img-public">
      <button class="btn-publicar">Publicar</button>
    </div>  
    <div class="container-publicado">
      <img src="images/curtir.png" class="img-curtir">
      <img src="images/compartilhar.svg" class="img-compartilhar">
    </div>  
    `;

  return templateTimeLine;
};


export default timeline;
