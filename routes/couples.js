const express = require('express')
const router = express.Router()
const ctrl = require('../controller/couples')

router.post('/', ctrl.createCouple)
router.delete('/:id', ctrl.deleteCouple)

module.exports = router
