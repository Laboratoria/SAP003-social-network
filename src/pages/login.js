import Button from '../components/button.js'; 

function Login() {
  const template = `
    <h1>Bem vinda a Heroínas!</h1>
    <input type="text" id="user" placeholder="email"/>
    <input type="password" id="password" placeholder="senha"/>
    ${Button({id:"teste", title:"login"})}
  `;
  return template;
}

export default Login;
