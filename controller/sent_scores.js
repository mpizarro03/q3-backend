const model = require('../models/sent_scores')


const getScores = (req, res, next) => {
  const {user_id, type } = req.params
  const is_loved = type === "loved" ? true : false
console.log(req.params);
  model.getScores(user_id, is_loved).then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })
}

const createScores = (req, res, next) => {
  const scores = req.body
  model.createScores(scores).then( result => {
    if (result.errors){ next(handleError(result))}
    else {res.status(200).json({ data: result })}
  })
}

module.exports = {
  getScores,
  createScores
}
