/*
//HTTP
var http = require('http');

//opciones
var opciones = {
    port:80,
    hostname:"google.com",
    method: "get",
    path: "http://google.com"
};
var req =  http.request(opciones,(respuesta)=>{
    // la respuesta es otro canal de lectura
    respuesta.on('data', (chunk)=>{
        console.log(chunk.toString());
    });

    respuesta.on('end', ()=>{
        console.log(respuesta.headers);
    });
});

req.end(); //writeStream: lanza la comunicación del request
console.log("Petición lanzada.");*/

//HTTPS

var https = require('https');

//opciones
var opciones = {
    port:443,
    hostname:"google.com",
    method: "get",
    path: "https://www.google.com.ar/"
};
var req =  https.request(opciones,(respuesta)=>{
    // la respuesta es otro canal de lectura
    respuesta.on('data', (chunk)=>{
        console.log(chunk.toString());
    });

    respuesta.on('end', ()=>{
        console.log(respuesta.headers);
    });
});

req.end(); //writeStream: lanza la comunicación del request
console.log("Petición lanzada.");