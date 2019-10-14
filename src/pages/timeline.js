const timeline = () => {
  const templateTimeLine = `
    <input type="checkbox" id="btn_menu">
    <label for="btn_menu">&#9776;</label>
    <nav class="menu">
      <ul>
          <li><a href="#">Timeline</a></li>
          <li><a href="#">Perfil</a></li>
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
