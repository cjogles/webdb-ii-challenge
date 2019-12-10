
exports.up = function(knex) {
  // always return the call to knex schema
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make', 256)
        .notNullable();
      tbl.string('model', 256)
        .notNullable();
      tbl.integer('VIN').unsigned();
      tbl.string('transmission-type', 256);
      tbl.string('title-status', 256);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
