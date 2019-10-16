import Button from '../components/button.js';
import textArea from '../components/textarea.js';
function voltarPg() {
  window.location.href = '#home';
}

function enviarTexto(){
  const texto = document.querySelector('.area-publicacao').value;

  console.log(texto)

  document.getElementById('retorna-text').innerHTML += texto;

}

function Feed() {
  const temp = 
  `
  <h2> Feed</h2> 
  ${textArea ({rows:'3',cols:'30', wrap:'hard',class:'area-publicacao'})} <br>
  ${Button ({ id :'publicacao', title:'Publicar', onClick:enviarTexto})}
  ${Button({ id: 'voltar', title: 'voltar', onClick: voltarPg })}
  <p id= 'retorna-text'></p>
`;
  return temp;
}

export default Feed;
