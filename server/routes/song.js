var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */ 
/* router.get("/:songid", function(req, res, next) {
  //console.log(res) 
  knex('Song').select().then( function(data) {
    res.send(data);
  });
}); */

//likes +1  route
router.put("/:songid", function (request, res) {

console.log(request)

  knex('Song')
  .where('id_song', request.params.songid)
  .increment('likes', 1).then(function(data) {
    knex('Song')
    .where('id_song', request.params.songid)
    .then( function(data2) {
      res.send(data2.likes);
    });
  });

});


//likes -1  route
router.delete("/:songid", function (request, res) {
  knex('Song')
  .where('id_song', request.params.songid)
  .decrement('likes', 1).then( function(data) {
    knex('Song')
    .where('id_song', request.params.songid)
    .then( function(data2) {
      res.send(data2.likes);
    });
  });

});

module.exports = router;
