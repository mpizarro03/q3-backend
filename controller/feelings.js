const model = require('../models/feelings')


const getFeelings = (req, res, next) => {
  const {user_id} = req.params
  model.getFeelings(user_id)
    .then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })
}

const createFeeling = (req, res, next) => {
  console.log(req.body)
  model.createFeeling(req.body)
  .then((result) => {
    res.send(result)
  })
}

module.exports = {
  getFeelings,
  createFeeling
}
