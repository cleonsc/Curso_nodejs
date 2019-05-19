var arr = [1, 4, -23, 9, 0, 12, 45, -5];

// for comun
/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}*/

// forEach - iterador
/*arr.forEach(function(a,b){
    console.log(a, b);
})*/

// forEach - iterador (con funcion flecha)
arr.forEach((a, b) => console.log(a, b));

//FILTER
var resultado = arr.filter((valor) => valor < 0);

console.log(resultado);

//MAP
//cada elemento es elevado al cuadrado
var resultadoMap = arr.map((valor) => valor * valor);
console.log(resultadoMap);

//se filtran los elementos elevados al cuadrado, para obtener los mayores a 500
var resultadoMapFilter = arr.map((valor) => valor * valor).filter((val) => val > 500);
console.log(resultadoMapFilter);

//REDUCE
//Reducir a un resultado unico basado en el arreglo.
var resultadoReduce = arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(resultadoReduce);

//devolviendo un json

var resultadoReduceJson = arr.reduce((acumulador, valorActual) => {
    acumulador.valor = acumulador.valor + valorActual;
    return acumulador;
}, {valor:0});
console.log(resultadoReduceJson);


//Se imprime el array para verficar que no ha sido modificado.
console.log(arr);