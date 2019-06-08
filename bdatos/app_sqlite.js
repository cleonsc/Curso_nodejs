const driver = require('sqlite');

//abrir conexion
const promesa = driver.open('./base.sqlite');

//then catch

promesa.then((driver) => {
    driver.exec('CREATE TABLE IF NOT EXISTS usuarios (nombre TEXT, edad INT);')
        .then((driver)=>{
            driver.exec('INSERT INTO usuarios VALUES ("César", 30)')
            .then((driver)=>{
                driver.get('SELECT * FORM usuarios;')
                .then((resultado)=>{
                    console.log(resultado);
                })
            })
        }).catch((causa)=>{
            console.log(causa);
        })
});

