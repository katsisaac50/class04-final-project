const inputData = require(__dirname + '/../data/output.json');

const recordNumber = 50
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Record').del()
    .then(function () {
      // Inserts seed entries
      const records = [];

            for (let key in inputData) {
              if(inputData.hasOwnProperty(key)){
                // console.log(key + " -> " + JSON.stringify(inputData[key]));

                records.push({
                  title:inputData[key].title,
                  alternative_title:inputData[key].alternativeTitle,
                  record_label:inputData[key].band,
                  location:inputData[key].physical,
                  // language:inputData[key].language,
                  // physical:inputData[key].physical,
                  // catNo:inputData[key].catNo,
                  // barcodes:inputData[key].barcodes,
                  // tracks:inputData[key].tracks,
                   });
              }
        
            }
           // console.log(records)
      return knex('Record').insert(records);
    })

    // .then(function () {
    //   // Inserts seed entries
    //   const song = [];

    //         for (let key in inputData) {
    //           if(inputData.hasOwnProperty(key)){
    //             // console.log(key + " -> " + JSON.stringify(inputData[key]));

    //             song.push({
    //               // title:inputData[key].title,
    //               // physical_medium:inputData[key].physical,
    //               language:inputData[key].language,
    //               year:inputData[key].year,
    //               // barcodes:inputData[key].barcodes,
    //               // tracks:inputData[key].tracks,
    //                });
    //           }
    //         }
    //         console.log(song)
    //   return knex('Song').insert(song);
    // })

    .then(function () {
      // Inserts seed entries
      const artist = [];

            for (let key in inputData) {
              if(inputData.hasOwnProperty(key)){
                // console.log(key + " -> " + JSON.stringify(inputData[key]));

                artist.push({
                  full_name:inputData[key].artist,
                 
                   });
              }
        
            }
            console.log(artist)
      return knex('Artist').insert(artist);
    })

    .then(function () {
      // Inserts seed entries
      const band = [];

            for (let key in inputData) {
              if(inputData.hasOwnProperty(key)){
                // console.log(key + " -> " + JSON.stringify(inputData[key]));

                band.push({
                  full_name:inputData[key].band,
            
                   });
              }
            }
      return knex('Band').insert(band);
    })
    
};
