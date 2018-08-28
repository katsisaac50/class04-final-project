var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.get('/', function(req, res, next) {
  //console.log(res) 
  knex('Song').select().then( function(data) {
    res.send(data);
  });
});

//base route
router.post("/", function (request, res) {
 //console.log(res) 
 knex('Song').select().then( function(data) {
  res.send(data);
});
});


module.exports = router;
