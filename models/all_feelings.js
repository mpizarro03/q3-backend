const knex = require('../knex')

const getFeelings = () => {
  return knex('feelings')
}

const createFeeling = (feeling) => {
  knex('feelings')
    .insert(feeling)
    .then((id) => {
    return id
    .where({id: feeling_id})
    })
}


module.exports = {
  createFeeling,
  getFeelings
}
