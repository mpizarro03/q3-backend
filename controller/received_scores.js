const model = require('../models/received_scores')

const getScores = (req, res, next) => {
  const {user_id, type } = req.params
  const is_loved = type === "loved" ? true : false
  model.getScores(user_id, is_loved).then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })

}

module.exports = {
  getScores
}
