var Cliente = require("./cliente.js");
var clienteGitHub = new Cliente("api.github.com", "443", "https");

console.log(clienteGitHub);

//autenticar nuestro cliente...
clienteGitHub.autenticarBasic("cleonsc","");

clienteGitHub.get("/users/cleonsc", (respuesta)=>{
    console.log(respuesta);
});