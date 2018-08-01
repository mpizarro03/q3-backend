const knex = require('../knex')


const getScores = (user_id,is_loved)=> {
  return knex.select('score', 'feedback', 'from_user_id', 'created_at').from('scores')
  .where({to_user_id: user_id})
  .join('users_feelings',`users_feelings.id`, `scores.users_feelings_id`)
  .join('feelings',`users_feelings.feeling_id`, `feelings.id`)
  .then( (scores)=> {
    if (!scores) {
      return { status: 404, errors: `Could not get scores that have been sent to this user` }
    }

    return scores

  })
}
module.exports = {
  getScores
}
