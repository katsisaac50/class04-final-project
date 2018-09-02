var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */ 
router.get("/:songtitle", function(req, res, next) {
  console.log(req.params.songid) 

  knex('Song').select().where('title', req.params.songtitle).then( function(data) {
    res.send(data);
  });
});



//likes +1  route
router.put("/:songtitle", function (request, res) {

console.log(request)

  knex('Song')
  .where('title', request.params.songtitle)
  .increment('likes', 1).then(function(data) {
    knex('Song')
    .where('title', request.params.songtitle)
    .then( function(data2) {
      res.send(data2.likes);
    });
  });

});


//likes -1  route
router.delete("/:songtitle", function (request, res) {
  knex('Song')
  .where('title', request.params.songtitle)
  .decrement('likes', 1).then( function(data) {
    knex('Song')
    .where('title', request.params.songtitle)
    .then( function(data2) {
      res.send(data2.likes);
    });
  });

});

module.exports = router;
