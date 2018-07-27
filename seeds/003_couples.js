
exports.seed = function(knex, Promise) {

  return knex('couples').del()
    .then(function () {

      return knex('couples').insert([
        {id: 1, user1_id: 1, user2_id: 2},
        {id: 2, user1_id: 3, user2_id: 4},
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('couples_id_seq', (SELECT MAX(id) FROM couples))"
      )
    })
}
