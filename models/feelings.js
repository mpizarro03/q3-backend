const knex = require('../knex')

const getFeelings = (user_id)=> {
  return knex('users_feelings')
  .where({user_id: user_id})
  .join('feelings',"feeling_id", "feelings.id")
  .then( (feelings)=> {
    if (!feelings) {
      return { status: 404, errors: `Could not find user feelings` }
    }
    return feelings
  })
}

const createFeeling = (feeling) => {
  return knex('users_feelings')
    .insert(feeling)
    .returning('id')
    .then((data) => {
      return data
    })
    .catch((err)=> {
      return err
    })
}


module.exports = {
  getFeelings,
  createFeeling,
}
