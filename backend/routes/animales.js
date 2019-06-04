var express = require('express');
var router = express.Router();

//todas las peticiones deben ser del tipo application/json
var validacion = function(req,res,next){
    if(req.get('content-type')=="application/json"){
        console.log("Validado");
    }else{
        res.status(403).send("Error");
    }
     next(); 
}


var contadorVistas = function (req, res, next) {
    if (req.session.vistas == undefined) {
        req.session.vistas = 0;
    }
    req.session.vistas++;
    next();
};

router.use(validacion);
router.use(contadorVistas);

router.get('/', (req, res, next) => {
    console.log(req.session);
    res.send("Recurso de animales ha sido visto " + req.session.vistas + " veces");
});

// para probar esto se usa restClient de chrome
//crear un animal
router.post('/', (req, res, next) => {
    if (!req.session.animales) {
        req.session.animales = [];
    }

    let body = req.body;
    //{nombre, especie}
    /*if(req.get('content-type')=="application/json"){
        console.log("Validado");
    }else{
        res.status(403).send("Error");
    }*/

    req.session.animales.push(req.body);
    console.log(req.session);
    res.send("La peticion ha sido recibida.");
});
module.exports = router;
