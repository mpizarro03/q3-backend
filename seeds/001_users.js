
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {id: 1, email: 'road_jerky@hotmail.com', name: 'Yummy Buns', image: '', password: 'batman696969'},
        {id: 2, email: 'aimee@tna.digital', name: 'Zawacki-mama-mia', image: '', password: 'buttSexIsVanilla'},
        {id: 3, email: 'mpizarro03@gmail.com', name: 'Hot lips', image: '', password: 'eatme'},
        {id: 4, email: 'm03@gmail.com', name: 'Salty Dog', image: '', password: 'ahoy'},
        {id: 5, email: 'fake@gmail.com', name: 'Dog', image: '', password: 'ahoya'}

      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
      )
    })
}
