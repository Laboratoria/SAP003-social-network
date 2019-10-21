import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Input from '../components/input.js';
import Card from '../components/card.js';


function enviarPublicacao(){
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const bancoDeDados = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  
  const posts = bancoDeDados[id].post;

  const mensagem ={
    postagem: document.querySelector('.js-mensagem-textarea').value,
    likes: 0,
    privacidade: 'publico',
    id: posts.length,
    // comentario:[]
  }

   posts.push(mensagem);

   window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(bancoDeDados));

   document.querySelector('.resp').innerHTML = '';


   
  
   posts.map(elem => 
      document.querySelector('.resp').innerHTML += template(elem.postagem))
      
}


function template(postagem){
  const template = `<p>${postagem}</p>
  ${Button({
    id: 'Botão',
    // class: 'js-botao-textarea'
    title: 'Editar',
    // onClick: editarPublicação,
  })}
  ${Button({
    id: 'Botão',
    // class: 'js-botao-textarea'
    title: 'Deletar',
    // onClick: deletarPublicação,
  })}`
  
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
      // class: 'js-botao-textarea'
      title: 'Publicar',
      onClick: enviarPublicacao,
    })}

    </form>

    <article class="resp">
    <p></p>
    </article> 

    <p><a href="#login">Sair</a> </p>

  `;

  return template;
}




export default Home;


window.enviarPublicacao = enviarPublicacao
window.template = template