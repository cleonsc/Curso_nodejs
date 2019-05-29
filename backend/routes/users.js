var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/:usuario', function (req, res, next) { //los : sirve para que el parametro sea variable
  //req -> peticion del cliente(navegador web)
  //res -> respuesta que vamos a enviar al cliente
  //next -> callback , la usa express para continuar con su ejecución
  let usuario = req.params.usuario;
  res.send('Usuario: '+usuario);
});

module.exports = router;
