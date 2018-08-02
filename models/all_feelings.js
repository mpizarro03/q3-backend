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
<<<<<<< HEAD
    .returning('id')
=======
>>>>>>> 6658b8dd8d8a6a7852a1e092173551fec057b0bf
    .then((data) => {
      return data
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
