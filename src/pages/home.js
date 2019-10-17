//import Button from '../components/button.js';
import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Input from '../components/input.js';


function enviarPublicacao(){
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const bancoDeDados = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  
  const posts = bancoDeDados[id].post;

  const mensagem ={
    postagem: document.querySelector('.js-mensagem-textarea').value,
    likes: 0,
    privacidade: 'publico',
    id: posts.length
  }

      posts.push(mensagem);

   window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(bancoDeDados));

   document.querySelector('.resp').innerHTML = '';
    // const lll = JSON.stringify(mensagemSalvar);
    posts.map(elem => 
      document.querySelector('.resp').innerHTML += `<p>${elem.postagem}</p>`)
    // document.querySelector('.resp').innerHTML = lll;
}



//   const mensagem ={
//   postagem: document.querySelector('js-mensagem-textarea').value  
//   }

//   let mensagemSalvar = localStorage.getItem('Publicar');
  
//   mensagemSalvar = JSON.parse(mensagemSalvar)

//   mensagemSalvar.push(mensagem);

//   localStorage.setItem('Publicar', JSON.stringify(mensagemSalvar));
// }

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

// function Home() {
//   const template = `
//     <h1 class= "título-login">Login</h1>
//    <form> 

//    ${Textarea({
//     class: 'js-mensagem-textarea',
//     placeholder: 'Escreva aqui sua mensagem',
//     type: 'text',
//   })}

//    ${Button({
//     id: 'Botão',
//     title: 'Publicar',
//     onClick: enviarPublicacao,
//   })}

//     </form>
//     <p class="mensagem-login">Não tem conta? <a href="#cadastro">Cadastre-se</a> </p>

//   `;

//   return template;
// }

// export default Home;


// ${Button({ id: '🐠', title: 'Botão 🐠' })}
// ${Button({ id: '🎉', title: 'Botão 🎉' })}

// <p>Esse é um exemplo 🍌</p>


// ${Textarea({
//   class: 'js-mensagem-textarea',
//   placeholder: 'Escreva aqui sua mensagem',
//   type: 'text',
//  })}

// ${Input({
//   class: 'js-mensagem-input',
//   placeholder: 'Escreva aqui sua mensagem',
//   type: 'text',
// })}
