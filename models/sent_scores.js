const knex = require('../knex')


const getScores = (user_id,is_loved)=> {
  return knex.select('score', 'feedback', 'description', 'created_at').from('scores')
  .where({from_user_id: user_id})
  .join('users_feelings','users_feelings.id', 'scores.users_feelings_id')
  .join('feelings','users_feelings.feeling_id', 'feelings.id')
  .then( (scores)=> {
    if (!scores) {
      return { status: 404, errors: `Could not find scores that the user has sent` }
    }

    return scores

  })
}

const createScores = (scores) => {
  return knex('scores')
    .insert(scores)
    .returning('*')
    .then((result) => {
      return result
    })

}

module.exports = {
  getScores,
  createScores
}
