const inputData = require(__dirname + '/../data/output.json');

// const recordNumber = 50
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Record').del()
    .then(function () {

      let records = [];
      let id = 1;

      // Inserts seed entries
      for (let key in inputData) {
        records.push({id_record: id++, title: inputData[key].title});//ids are set manually here so we know where there.
      }
      console.log(records)
      return   knex('Record')
              .insert(records)
              .then(function (row) {        

            let songsList = [];
            let id = 1; 
            for (let key in inputData) {
  
              console.log(key);
  
              for (track in inputData[key].tracks.all) {
                songsList.push( {
                   title: inputData[key].tracks.all[track],
                   record_idrecord: id
                 });           
               }
               id=id+1;
            }

              return   knex('Song')
              .insert(songsList);
 

            }).catch(err => console.error(err));

    });
};
