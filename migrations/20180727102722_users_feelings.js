
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_feelings', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')

    table.integer('feeling_id').notNullable()
    table.foreign('feeling_id').references('feelings.id').onDelete('CASCADE')
  })

}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_feelings')
};
