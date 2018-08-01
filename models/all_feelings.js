const knex = require('../knex')

const getFeelings = () => {
  return knex('feelings')
}

const createFeeling = (feeling) => {
  return knex('feelings')
    .insert(feeling)
    .then()
}


module.exports = {
  createFeeling,
  getFeelings
}
