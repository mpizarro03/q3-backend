
exports.up = function(knex, Promise) {
  return knex.schema.createTable('static_feelings', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.boolean('is_loved').defaultsTo(null)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('static_feelings')
}
