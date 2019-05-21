const fs = require('fs');

const readable = fs.createReadStream("./texto.txt");

readable.on('data', (chunk)=>{
    console.log(`Recived ${chunk.length} bytes of data.`)
    console.log(chunk)
    readable.pause();

    console.log('Ther will be no additional data for 1 second.');
    setTimeout(()=>{
        console.log('Now data will start flowing again.');
        readable.resume();
    },3000);
});

readable.on('end', ()=>{
    console.log("Finalizó la lectura del canal.");
});

readable.on('close', ()=>{
    console.log("Cerrando el canal.");
});