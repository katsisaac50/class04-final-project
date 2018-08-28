var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.get('/', function(req, res, next) {
  //console.log(res) 
  knex('Record').select().then( function(data) {
    res.send(data);
  });
 
});

// base route
router.post("/records", function (request, res) {
 //console.log('res') 
 
  res.send(records);

});

module.exports = router;
