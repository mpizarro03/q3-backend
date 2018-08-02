
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feelings', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.boolean('is_loved').notNullable()
    table.boolean('is_default').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feelings')
}
