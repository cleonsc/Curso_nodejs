var express = require('express');
var router = express.Router();
// coleccion de usuarios

const coleccion = 'usuarios';
/* GET users listing. */
router.get('/', function (req, res, next) {
    const db = req.app.get('db');
    const cursor = db.collection(coleccion).find({
        nombre: req.params.nombre
    });

    let resultado;
    cursor.on('data', (data) => {
        resultado = data;
    });

    cursor.on('end', () => {
        res.send(resultado);
    });
});

/* Busqueda de usuarios por nombre */
router.get('/:nombre ', function (req, res, next) {
    res.send('respond with a resource');
});


// usuario:
// nombre, password, email {nombre:"", password:"", email:""}
router.post('/', (req, res, next) => {
    var db = req.app.get('db'); // obtención de la DB. 
    var usuario = req.body // suponiendo que se envie la data en el cuerpo de la peticion http
    //logica de validación
    if (validadRegistro(usuario)) {
        db.collection(coleccion).insertOne(usuario, (err, resp) => {
            res.send(resp);
        });
    } else {
        res.status(403).send("ERROR");
    }
});

function validadRegistro(usuario) {
    if (usuario == undefined || usuario == null) {
        return false;
    }
    if (!usuario.nombre) {
        return false;
    }
    if (!usuario.password) {
        return false;
    }
    if (!usuario.email) { // se puede mejorar la validacion usando expresiones regulares
        return false;
    }
    return true;
}
module.exports = router;
