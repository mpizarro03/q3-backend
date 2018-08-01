const model = require('../models/all_feelings')

const createFeeling = (req, res, next) => {
  model.createFeeling(req.body)
  .then((result) => {
    res.send(result)
  })
}

const getFeelings = (req, res, next) => {
  model.getFeelings()
  .then((result) => {
    res.send(result)
  })

}

module.exports = {
  createFeeling,
  getFeelings
 }
