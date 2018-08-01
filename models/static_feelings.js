const knex = require('../knex')

const getAllFeelings = () => {
  return knex('static_feelings')
}


module.exports = {
  getAllFeelings
}
