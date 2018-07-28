const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controller/received_scores')

router.get('/:type', ctrl.getScores)

module.exports = router
