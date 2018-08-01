const express = require('express')
const router = express.Router()
const ctrl = require('../controller/all_feelings')

router.get('/', ctrl.getFeelings)
router.post('/', ctrl.createFeeling)


module.exports = router
