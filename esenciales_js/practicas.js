//POO
//ES6 class

var Objeto = function(){

}

Objeto.prototype.Saludar = function (msg, callback){
    console.log("Saludo: ", msg)
    if(typeof callback == 'function'){
        callback()
    } else {
        console.log("Callback no es una funcion")
    }
    
}

//instanciar obj
var o = new Objeto()
o.Saludar("Hola mundo", function(){
    console.log("Callback ejecutado")
})

o.Saludar("Hey .....!!", 5)
//agregar funcionalidad
/*Objeto.prototype.Despedirse = function (){
    console.log("Adios")
}
o.Despedirse()*/