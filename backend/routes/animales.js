var express = require('express');
var router = express.Router();

var contadorVistas = function(req,res,next){
    if (req.session.vistas == undefined) {
        req.session.vistas = 0;
    }
    req.session.vistas++;
    next();
};

router.use(contadorVistas);

router.get('/',(req,res,next)=>{
    console.log(req.session);
    res.send("Recurso de animales ha sido visto "+req.session.vistas+" veces");
})
module.exports = router;
