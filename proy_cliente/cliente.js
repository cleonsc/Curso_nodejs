// cliente HTTP/HTTPS
//github.com/cleonsc

const fs = require('fs');
class Cliente{
    constructor(host, puerto, protocolo){
        this.host = host;
        this.puerto = puerto;
        this.protocolo = protocolo;
        if(this.protocolo !='http' && this.protocolo !='https'){
            console.log("ERROR!!!");
        }
        this.logDir = fs.mkdtempSync("/tmp/cliente-http-");
    }

    //metodo de autenticacion HTTP BASIC

    autenticarBasic(user,pass){
        this.basicAuth = new Buffer.from(user+":"+pass).toString("base64"); //ascci, hex, base64
    }

    //Procesar HEADERS para mantener sesion -> se realiza en la peticion(request)
    procesarHeaders(){
        var headers = {
            "Accept": "*/*",
            "User-Agent":"Cliente de nodejs"
        }
        if(this.basicAuth != undefined){
            headers.Autorization = "Basic "+this.basicAuth;
        }
        return headers;
    }

    //Realizar peticiones HTTP de tipo Get (Obtener informacion)
    get(uri,callback){
        var opciones = {
            hostname: this.host,
            port: this.puerto,
            method: 'GET',
            path: this.protocolo+"://"+this.host+uri, // https://api.github.com/cleonsc //jorgevgut
            headers: this.procesarHeaders()
        };
        this.request(opciones, null, callback);
    }

    post(uri, data, callback){
        var opciones = {
            hostname: this.host,
            port: this.puerto,
            method: 'POST',
            path: this.protocolo+"://"+this.host+uri, // https://api.github.com/cleonsc //jorgevgut
            headers: this.procesarHeaders()
        };

        this.request(opciones, data, callback);
    }
    

    //request (manejo de peticiones)
    request(opciones, data, callback){
        //http o https
        var http = require(this.protocolo);//http, o https
        var respuesta = {
            status: null,
            body: "",
            headers: null
        };
        var peticion = http.request(opciones,(canalRespuesta)=>{
            canalRespuesta.on('data', (chunk)=>{
                respuesta.body+= chunk;
            });

            canalRespuesta.on('end', ()=>{
                respuesta.status = canalRespuesta.statusCode;
                respuesta.headers = canalRespuesta.headers;
                fs.appendFile(this.logDir+"/cliente.log","lorem ipsum\n",(err) => {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                  });
                callback(respuesta);
            });
        });
        if(data != undefined && data != null){
            peticion.write(JSON.stringify(data));
        }
        peticion.end();
    }
}

module.exports = Cliente;