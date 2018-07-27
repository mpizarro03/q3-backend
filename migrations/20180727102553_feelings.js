
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feelings', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').notNullable().defaultsTo('')
    table.boolean('is_loved').defaultsTo(null)
    table.boolean('is_default').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feelings')
};
