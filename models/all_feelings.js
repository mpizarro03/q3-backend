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
  knex('feelings')
    .insert(feeling)
<<<<<<< HEAD
    .then((id) => {
    return id
    .where({id: feeling_id})
=======
    .then((data) => {
      return knex('feelings')
        .where('name', feeling.name)
    })
    .catch((err)=> {
      return err
>>>>>>> c1c32e8c6f9cd7ee3ad94c78f312ee6c5de8781d
    })
}


module.exports = {
  createFeeling,
  getFeelings,
  getOneFeeling,
}
