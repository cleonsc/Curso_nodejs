//POO
//ES6 class

var Objeto = function(){

}

Objeto.prototype.Saludar = function (msg){
    console.log("Saludo: ", msg)
}

//instanciar obj
var o = new Objeto()
o.Saludar("Hola mundo")

//agregar funcionalidad
Objeto.prototype.Despedirse = function (){
    console.log("Adios")
}

o.Despedirse()