const model = require('../models/feelings')


const getFeelings = (req, res, next) => {
  const {user_id, type } = req.params
  const is_loved = type === "loved" ? true : false;
  model.getFeelings(user_id, is_loved).then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })
}
// const createFeelings = (req, res, next) => {
//   model.createFeelings(req.body)
// }

// const createFeeling = (req, res, next) => {
//   model.createFeeling(req.body)
//   .then((result) => {
//     res.send(result)
//   })
// }

// const updateFeelings = (req, res, next) => {
//
// }

module.exports = {
  getFeelings,
}
