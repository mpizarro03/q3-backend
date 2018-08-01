const express = require('express')
const router = express.Router()
const ctrl = require('../controller/static_feelings.js')

router.get('/', ctrl.getAllFeelings)

module.exports = router
