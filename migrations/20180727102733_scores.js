
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', table => {
    table.increments()
    table.integer('couple_id').notNullable()
    table.foreign('couple_id').references('couples.id').onDelete('CASCADE')

    table.integer('from_user_id').notNullable()
    table.foreign('from_user_id').references('users.id').onDelete('CASCADE')

    table.integer('to_user_id').notNullable()
    table.foreign('to_user_id').references('users.id').onDelete('CASCADE')

    table.integer('users_feelings_id').notNullable()
    table.foreign('users_feelings_id').references('users_feelings.id').onDelete('CASCADE')

    table.timestamps(true, true)

    table.integer('score').notNullable().defaultsTo(0)

    table.string('feedback').notNullable().defaultsTo('')

  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores')
}
