import Button from '../components/button.js';

function voltarPg() {
  window.location.href = '#home';
}

function Feed() {
  const temp = `
        <h1> Rede Social</h1>
        <h2> Feed</h2> 
        
    ${Button({ id: 'voltar', title: 'voltar', onClick: voltarPg })}
`;
  return temp;
}

export default Feed;
