const express = require('express')
const app = express()

//ruta (route)
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/usuarios', (req, res) => {
    res.send({
        usuarios:["Jorge","Carlos", "Juan"]
    });
  });
app.listen(3000)