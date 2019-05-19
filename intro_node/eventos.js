const Eventos = require('events');

class Carro extends Eventos{
    constructor(){
        super();
        this.contador = 0;
    }

    Arrancar(){
        console.log("El auto arranca");
        this.emit('arranco', this.contador,1,2,3); // al emitir el evento se pueden pasar un sin numero de variables
        this.contador +=1;
    }
}

var carro1 = new Carro();

// Para escuchar eventos, nos suscribimos con el método ON
carro1.on('arranco', function(c,a,b,d){
    console.log(c,a,b,d, "El evento fue escuchado y la secuencia ejecutada.")
})


carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();