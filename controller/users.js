const model = require('../models/users.js')

const handleError = (result) => {
    return { status: result.status, message: result.errors }
}


const getUser = (req, res, next) => {
  const id = req.params.id
  model.getUser(id).then((result) => {
    if (result.errors){ next(handleError(result))}
    else {res.status(200).json({ data: result })}
  })
}

const createUser = (req, res, next) => {
  const { displayName, email } = req.body
  if (!displayName || !email) return next({ status: 400, message: `Fields displayName and email are required` })

  const user = { display_name: displayName, email, reminder_freq: '7' }
  model.createUser(user).then( data => {
    if (data.constraint) {
      res.send({message: 'User already exists in db'})
    } else {
    res.send({message: 'User successfully added'})
    }
  })
}


const deleteUser = (req, res, next) => {
  const userId = req.body.id
  model.deleteUser(userId).then( data => {
    if (data) {
      res.send( { message: 'User successfully deleted' } )
    } else {
    res.send( { message: 'User does not exists' } )
    }
  })
}

module.exports = {
  getUser,
  createUser,
  deleteUser
}
