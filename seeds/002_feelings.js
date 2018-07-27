
exports.seed = function(knex, Promise) {

  return knex('feelings').del()
    .then(function () {

      return knex('feelings').insert([
        {id: 1, name: 'Appreciation', description: 'booyah', is_loved: true, is_default: true},
        {id: 2, name: 'Quality Time', description: 'booyah',is_loved: true, is_default: true},
        {id: 3, name: 'Affection', description: 'booyah',is_loved: true, is_default: true},
        {id: 4, name: 'Adoration', description: 'booyah',is_loved: true, is_default: true},
        {id: 5, name: 'Sexual Intimacy', description: 'booyah',is_loved: true, is_default: true},
        {id: 6, name: 'Recreation Together', description: 'booyah',is_loved: true, is_default: true},
        {id: 7, name: 'Intimate Conversation', description: 'booyah', is_loved: true, is_default: true},
        {id: 8, name: 'Harsh Anger',description: 'booyah', is_loved: false, is_default: true},
        {id: 9, name: 'Passive', description: 'booyah',is_loved: false, is_default: true},
        {id: 10, name: 'Critical', description: 'booyah',is_loved: false, is_default: true},
        {id: 11, name: 'No Voice', description: 'booyah',is_loved: false, is_default: true},
        {id: 12, name: 'Unsolicited Advice', description: 'booyah',is_loved: false, is_default: true},
        {id: 13, name: 'Stonewalling', description: 'booyah',is_loved: false, is_default: true},
        {id: 14, name: 'Defensive', description: 'booyah',is_loved: false, is_default: true},
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('feelings_id_seq', (SELECT MAX(id) FROM feelings))"
      )})
}
