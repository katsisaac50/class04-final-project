
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Record',
    function (t) {
       t.increments('id_record').unsigned().primary();
       t.string('title').notNull();
       t.string('alternative_title');
       t.string('record_label');
       t.string('location');
       t.foreign('id_record').references('Record.id');
   })
   .createTable('Song',
   function (t) {
      t.increments('id_song').unsigned().primary();
      t.string('title').notNull();
      t.string('physical_medium');
      t.string('language');
      t.integer('year').notNull();
      t.string('genre');

  }) 
  .createTable('Artist',
  function (t) {
     t.increments('id_artist').unsigned().primary();
     t.string('full_name',1000);
    //  t.integer('id_record',11).unsigned().references('id_record').inTable('Record');
     
 })

 .createTable('Band',
  function (t) {
     t.increments('id_band').unsigned().primary();
     t.string('full_name').notNull();
     
 })
//  .createTable('Band_had_artist',
// function(t){
//    t.integer("id_band").notNullable().references("Band.id_band");
//     t.integer("id_artist").notNullable().references("Artist.id_artist");
//     t.primary(["id_band","id_artist"]);
// })
};

exports.down = function(knex, Promise) {
    return knex.dropTable('Record','Band','Song','Artist','Band_had_artist'); 

};
