const model = require('../models/couples')


const handleError = (result) => {

    return { status: result.status, message: result.errors }
}


const createCouple = (req, res, next) => {

  const { user1_id, user2_id } = req.body
  if (user1_id === undefined || user2_id === undefined) return next({ status: 400, message: `2 user ids are required` })

  const couple = { user1_id, user2_id }
  model.createCouple(couple).then( data => {
    if (data.constraint) {
      res.send({message: 'Couple already exists in db'})
    } else {
    res.send({message: 'Couple successfully added'})
    }
  })
}

const deleteCouple = (req, res, next) => {
  const couple_id = req.params.id
  model.deleteCouple(couple_id).then( data => {
    if (data) {
      res.send( { message: 'Couple successfully deleted' } )
    } else {
    res.send( { message: 'Couple does not exist' } )
    }
  })
}

module.exports = {
  createCouple,
  deleteCouple,
}
