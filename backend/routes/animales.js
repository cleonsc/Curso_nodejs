var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("Recurso de animales");
})
module.exports = router;
