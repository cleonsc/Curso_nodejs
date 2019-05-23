// cliente HTTP/HTTPS
//github.com/cleonsc
class Cliente{
    constructor(host, puerto, protocolo){
        this.host = host;
        this.puerto = puerto;
        this.protocolo = protocolo;
        if(this.protocolo !='http' && this.protocolo !='https'){
            console.log("ERROR!!!");
        }
    }

    //Procesar HEADERS para mantener sesion -> se realiza en la peticion(request)
    procesarHeaders(){
        var headers = {
            "Accept": "*/*",
            "User-Agent":"Cliente de nodejs"
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
        this.request(opciones, callback);
    }

    post(uri, data){

    }
    

    //request (manejo de peticiones)
    request(opciones, callback){
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
                callback(respuesta);
            });
        });

        peticion.end();
    }
}

module.exports = Cliente;