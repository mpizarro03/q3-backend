const knex = require('../knex')

const getFeelings = (user_id,is_loved)=> {
  return knex('users_feelings')
  .where({user_id: user_id, is_loved: is_loved})
  .join('feelings',"feeling_id", "feelings.id")
  .then( (feelings)=> {
    if (!feelings) {
      return { status: 404, errors: `Could not find user feelings` }
    }

    return feelings

  })
}

const createFeelings = (user1,user2) => {
  return Knex('users_feelings')
}
//
//
// const updateFeelings = () => {
//
// }

module.exports = {
  getFeelings,
  // createFeelings,
  // updateFeelings
}
