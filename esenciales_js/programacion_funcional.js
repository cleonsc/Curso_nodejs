//Programacion Funcional

//1.-Inmutabilidad 
var a = [1, 2, 3, 4];
//a[0] = 10;


var b = a.map((x) => x * 2);

console.log(b);

//2.- Funciones como parametros, funciones que devuelven funciones
// - reutilizaci+on de código

var suma = function (a, b) {
    return a + b;
}


var suma2 = function (a) {
    return function (b) {
        return a + b;
    }
}

var sumar10 = suma2(10);
var sumar11 = suma2(11);

var f = function(callback){
    //ejecución de una o mas sentencias
    return callback();
}

//En P.F siempre se debe retorna un resultado único.
// la raiz cuadrada de 4 = 2 y -2, por lo tanto esto NO ES FUNCIONAL

console.log(suma(2, 2), suma2(2)(3), sumar10(7));
