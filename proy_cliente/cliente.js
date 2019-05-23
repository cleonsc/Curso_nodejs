// cliente HTTP/HTTPS
//github.com/cleonsc
class Cliente{
    constructor(host, puerto, protocolo){
        this.host = host;
        this.puerto = puerto;
        this.protocolo = protocolo;
    }

    //Procesar HEADERS para mantener sesion -> se realiza en la peticion(request)
    procesarHeaders(req){
        return req;
    }

    //Realizar peticiones HTTP de tipo Get (Obtener informacion)
    get(uri){

    }

    post(uri, data){

    }
}

module.exports = Cliente;