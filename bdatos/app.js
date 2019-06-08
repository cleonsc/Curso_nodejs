const MongoClient = require('mongodb').MongoClient;

//cadena de conexion - conection string.
const url = 'mongodb://mongodb@127.0.0.1:32768';
const dbName = 'miBase';
const cliente = new MongoClient(url);

//connection
cliente.connect((error, cliente) => {    
    const db = cliente.db(dbName);
    //colecciones (tablas) -> NOSQL
    db.collection('animales')
        .insertOne({ nombre: "Luna", especie: "perro" }, (error, result) => {
            db.collection('animales')
            .findOne((error,result)=>{
                console.log(result);
                cliente.close();
            });
        });
});