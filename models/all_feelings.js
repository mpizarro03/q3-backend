const knex = require('../knex')

const getFeelings = () => {
  return knex('feelings')
}

const getOneFeeling = (id) => {
  return knex('feelings')
  .where('id', id)
  .then( (user)=> {
    if (!user) return { status: 404, errors: `Could not find user with id of ${id}` }

  return user

  })
}

const createFeeling = (feeling) => {
  return knex('feelings')
    .insert(feeling)
    .then((data) => {
      return knex('feelings')
        .where('name', feeling.name)
    })
    .catch((err)=> {
      return err
    })
}


module.exports = {
  createFeeling,
  getFeelings,
  getOneFeeling,
}
