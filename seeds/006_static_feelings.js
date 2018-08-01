
exports.seed = function(knex, Promise) {

  return knex('static_feelings').del()
    .then(function () {

      return knex('static_feelings').insert([
        {id: 1, name: 'Affection', is_loved: true},
        {id: 2, name: 'Quality Time', is_loved: true},
        {id: 3, name: 'Affection', is_loved: true},
        {id: 4, name: 'Adoration', is_loved: true},
        {id: 5, name: 'Sexual Intimacy', is_loved: true},
        {id: 6, name: 'Recreation Together', is_loved: true},
        {id: 7, name: 'Intimate Conversation', is_loved: true},
        {id: 8, name: 'Harsh Anger', is_loved: false},
        {id: 9, name: 'Passive', is_loved: false},
        {id: 10, name: 'Critical', is_loved: false},
        {id: 11, name: 'No Voice', is_loved: false},
        {id: 12, name: 'Unsolicited Advice', is_loved: false},
        {id: 13, name: 'Stonewalling', is_loved: false},
        {id: 14, name: 'Defensive', is_loved: false}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('static_feelings_id_seq', (SELECT MAX(id) FROM feelings))"
      )})
}
