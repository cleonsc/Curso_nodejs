var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/db', function(req, res, next){
  const db = req.app.get('db');
  console.log(db);
  res.send("Petición recibida.");
});
module.exports = router;
