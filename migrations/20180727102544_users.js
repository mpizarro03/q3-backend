
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('email').notNullable().defaultsTo('')
    table.string('password').notNullable().defaultsTo('')
    table.string('image').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
