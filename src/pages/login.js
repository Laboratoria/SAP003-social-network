import Button from '..components/button.js'

function Login(){
  const template = `
      <h2> Faça o seu Login </h2>
      <form>
        <input class="js-email-input", type="email", placeholder="E-mail">
        <input class="js-password-input", type="password", placeholder="Senha">
      </form>`

    return template;
    };


  export default Login;
