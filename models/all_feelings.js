const knex = require('../knex')

const getFeelings = () => {
  return knex('feelings')
}

const createFeeling = (feeling) => {
  return knex('feelings')
    .insert(feeling)
    .then((response) => {
      return response
    })
}


module.exports = {
  createFeeling,
  getFeelings
}
