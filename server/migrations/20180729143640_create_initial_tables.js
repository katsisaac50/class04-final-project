exports.up = function (knex, Promise) {
  return knex.schema.createTable('Record',
    function (t) {
      t.increments('id_record').unsigned().primary()
      t.string('title').notNull()
      t.string('alternative_title')
      t.string('record_label')
      t.string('location')
      
    })
    .createTable('Artist',
    function (t) {
      t.increments('id_artist').unsigned().primary()
      t.string('full_name', 1000)
      //  t.integer('id_record',11).unsigned().references('id_record').inTable('Record')

    })

  .createTable('Band',
    function (t) {
      t.increments('id_band').unsigned().primary()
      t.string('full_name').notNull()
    })
.createTable('Band_artist',
function(t){
  t.integer('Artist_idArtist')
      .unsigned()
      .notNullable()
      .references('id_artist')
      .inTable('Artist')

      t.integer('Band_idBand')
      .unsigned()
      .notNullable()
      .references('id_band')
      .inTable('Band')

//    t.integer("id_band").notNullable().references("Band.id_band")
  // t.integer("id_artist").notNullable().references("Artist.id_artist")
  // t.primary(["id_band","id_artist"])
})
    .createTable('Song',
      function (t) {
        t.increments('id_song').unsigned().primary()
        t.string('title').notNull()
        t.string('physical_medium')

        t.integer('song_in_record')
        .unsigned()
        .notNullable()
        .references('id_record')
        .inTable('Record')
        
        t.integer('band_song_in_band')
        .unsigned()
        .notNullable()
        .references('Band_idBand')
        .inTable('Band_artist')

        t.integer('artist_song_in_artist')
        .unsigned()
        .notNullable()
        .references('Artist_idArtist')
        .inTable('Band_artist')
      })
      
    
}

exports.down = function (knex, Promise) {
  return knex.schema
  .dropTable('Band')
  .dropTable('Song')
  .dropTable('Artist')
  .dropTable('Band_artist')
  .dropTable('Record')
}
