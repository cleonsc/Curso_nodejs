var x = function(a, b){
    c = a + b;
    return c;
}

//Funcion Flecha
//Tal como está, toma los parámetros y devuelve el resultado de a+b
//sin depender del return.
var y = (a, b)=>a+b;

console.log(x(3,4), y(5,6));