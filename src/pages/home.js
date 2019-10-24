import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Input from '../components/input.js';
import Card from '../components/card.js';
//import Menu from '../components/menu.js';

// function exibirMenu(){
// var veri = 1;
// var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
// var menu = document.getElementById('menu-hidde');
// if (veri == 1) {
// menu.style.left = "0px";
// veri = 0;
// }else{
// menu.style.left = "-100%";
// veri = 1;
//  }
// }
 
// window.validarPublicacao = () => {
//     if (home.imprimirPosts(posts) != null) {
//       return true ;
//     }
//   }
 

function enviarPublicacao(){
  const text = document.querySelector('.js-mensagem-textarea').value;
  console.log(text)
  if (text) {
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
   document.querySelector('.js-mensagem-textarea').value = '';
  }
  
      
}


function imprimirPosts (posts) {
  document.querySelector('.resp').innerHTML = '';

   posts.map(elem => 
      document.querySelector('.resp').innerHTML += window.home.template(elem.postagem, elem.id))
}

 function deletarPublicação(event){
   const idPost = event.target.dataset.id
  
  let posts = home.bancoDeDados[home.id].post;
  let deletando = posts.filter(elem => {
    return  elem.id != idPost
  })

  
  home.bancoDeDados[home.id].post = deletando

  window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

   home.imprimirPosts(deletando);
  }



//  function salvarEdicao(event){
//   const idPost = event.target.dataset.id
//   const textoEditado = "";
  
//   let posts = home.bancoDeDados[home.id].post;
//   let salvando = posts.map(elem => {
//     if(elem.id === idPost)
//     return  elem.postagem == textoEditado
//   })

  
//   home.bancoDeDados[home.id].post = salvando

//   window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

//    home.imprimirPosts(salvando);

//  } 


function editarPublicação (event){
  const postId = event.target.dataset.id;
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);
  paragrafo.contentEditable  = 'true';
  paragrafo.focus()
  paragrafo.onblur = () => {
    paragrafo.contentEditable  = 'false';
    const postIndex = home.bancoDeDados[home.id].post.findIndex(post => post.id == postId)
    console.log(postIndex)
    home.bancoDeDados[home.id].post[postIndex].postagem = paragrafo.textContent;
    
    // = paragrafo.textContent;

    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));
  }
//   //contentditable
//   if(document.querySelector('.resp').contentEditable = 'true'){
//     salvarEdicao(event)
//   }
//   //colocar botão de salvar
//   // const salvarEdicao = document.createElement('BUTTON');
//   // salvarEdicao.innerHTML = 'Salvar';
// //ou coloca o botão assim...
//   const template = `
//   ${Button({
//     id: postId,
//     title: 'Salvar',
//     onClick: salvarEdicao,
//   })}`
}



function template(postagem, postId){
  const template = `
  <div class= "container-postagen">
  <p data-id='${postId}'>${postagem}</p>
  ${Button({
    id: postId,
    // class: 'js-botao-editar'
    title: 'Editar',
    onClick: editarPublicação,
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

  // <ul>
  //   <li>
  //     ${Input({ dataId: post.id, class: 'js-text', type: 'text', placeholder: 'Comentar aqui' })}
  //     ${Button({ dataId: post.id, title: 'Comentário', /*onClick: sendComment*/})}
  //   </li>
  //     ${post.comments.map(comment => `<li>${comment.text}</li>`).join('')}
  // </ul>


