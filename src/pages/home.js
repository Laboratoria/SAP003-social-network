import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Input from '../components/input.js';
import Card from '../components/card.js';
 



function enviarPublicacao(){
  
  const posts = home.bancoDeDados[home.id].post;

  const mensagem ={
    postagem: document.querySelector('.js-mensagem-textarea').value,
    likes: 0,
    privacidade: 'publico',
    id: new Date().getTime(),
    comentario:[]
  }

   posts.push(mensagem);

   window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

   home.imprimirPosts(posts);
      
}


function imprimirPosts (posts) {
  document.querySelector('.resp').innerHTML = '';

   posts.map(elem => 
      document.querySelector('.resp').innerHTML += window.home.template(elem.postagem, elem.id))
}

 function deletarPublicação(event){
   const idPost = event.target.dataset.id
  
  let posts = home.bancoDeDados[home.id].post;
  let paloma = posts.filter(elem => {
    return  elem.id != idPost
  })

  
  home.bancoDeDados[home.id].post = paloma

  window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

   home.imprimirPosts(paloma);

  }





//    alert('peixinho')
//  }
//  const id = new Date().getTime();
//    switch (id) {
//     case 'delete':
//       if (id == 'mensagem') {
//       }
//       break;

    // case 'editar':
    //   if (id == 'editar') {
    //   }
    //   break;

    // default: 
 


//   var timestamp = new Date().getTime();
//   const deletar = JSON.stringify(${Card({children: template})});
//   const deletar = JSON.parse(localStorage.getItem('id'))
//   const deletar = document.querySelector('.resp')
// if (nome.value == "") {
//   alert("Insira um nome válido.");
//   return false;
// if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
//   alert("Insira um email válido");
//   return false;
// }
//   deletar.array.forEach(element => {
    
//   });
// }


function template(postagem, postId){
  const template = `
  <div class= "container-postagen">
  <p>${postagem}</p>
  ${Button({
    id: postId,
    // class: 'js-botao-editar'
    title: 'Editar',
    // onClick: editarPublicação,
  })}
  ${Button({
    id: postId,
    // class: 'js-botao-deletar'
    title: 'Deletar',
    onClick: deletarPublicação,
  })}
  ${Button({
    id: 'Botão',
    // class: 'js-botao-comentar'
    title: 'Comentar',
    //onClick: comentarPublicação,
  })}
  </div>`
  
  return `${Card({children: template})}`
}


//FIXAR OS POSTS
// function printarPubliacao(){

// }

//BOTÃO DE DELETE, EDITAR E COMENTAR OS POSTS FIXADOS

//INSERIR COMENTÁRIOS AOS POSTS FIXADOS
// const pegarComentario = JSON.parse(localStorage.getItem('comentarioDoPost'));
// if (!Array.isArray(pegarComentario)) {
//   pegarComentario = [];
// }

// const comentario = 

//  mensagem.comentario

// BOTÃO DO LIKE (USAR O REDUCE?)


  

function Home() {
  const template = `
    <h1>Home Page</h1> 

    <form> 

  ${Textarea({
    class: 'js-mensagem-textarea',
    placeholder: 'Escreva aqui sua mensagem',
    type: 'text',
   })}


    ${Button({
      id: 'Botão',
      // class: 'js-botao-publicar'
      title: 'Publicar',
      onClick: enviarPublicacao,
    })}

    </form>

    <article class="resp">
    <p></p>
    </article> 

    <p><a href="#login">Sair</a> </p>
    <p><a href="#perfil">Perfil</a> </p>

  `;

  return template;
}




export default Home;


// window.enviarPublicacao = enviarPublicacao
// window.template = template
// window.imprimirPosts = imprimirPosts

window.home = {
  template: template,
  imprimirPosts: imprimirPosts,
  id: JSON.parse(localStorage.getItem('usuarioLogado')),
  bancoDeDados: JSON.parse(localStorage.getItem('colecaoDeUsuarios'))
}