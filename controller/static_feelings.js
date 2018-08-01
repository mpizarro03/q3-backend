const model = require('../models/static_feelings.js')


const getAllFeelings = (req, res, next) => {
  model.getAllFeelings()
  .then((result) => {
    res.send(result)
  })

}

module.exports = {
  getAllFeelings
}
