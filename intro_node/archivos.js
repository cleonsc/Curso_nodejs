const fs = require('fs');

// leer archivo (texto.txt) de manera sincronica
/*archivo = fs.readFileSync("./texto.txt");
console.log(archivo.toString());*/
var archivo;
//fs.readFile("./texto.txt", (err, data)=>{ //callback asymc
fs.readFile("./err.txt", (err, data)=>{ //callback asymc
    //console.log(data.toString());
    archivo = data;
    console.log(err);
    console.log(archivo);
});

console.log(archivo);