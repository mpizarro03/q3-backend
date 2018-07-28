const express = require('express')
const router = express.Router()
const ctrl = require('../controller/users.js')

router.get('/:id', ctrl.getUser)
router.post('/', ctrl.createUser)
router.delete('/:id', ctrl.deleteUser)

module.exports = router
