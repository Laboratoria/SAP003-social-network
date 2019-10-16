import Input from '../components/input.js';
import Button from '../components/button.js';

function feed() {
  const template = `
    <form class="cadastro">
      ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
      ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
      ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
      
    
  
    `;
  return template;
}

export default feed;

/* Função logout para por no feed
 function logout() {
  localStorage.removeItem('usuario');
  ${Button({ title: 'Login', onClick: logout })}
  window.location.reload();
}
 */
