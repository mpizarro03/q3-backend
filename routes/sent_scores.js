const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controller/sent_scores')

router.get('/:type', ctrl.getScores)
router.post('/', ctrl.createScores)

module.exports = router
