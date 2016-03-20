
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', function(table){
    table.string('name');
    table.string('email');
    table.integer('phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people');
};
