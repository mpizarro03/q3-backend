const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controller/feelings')

router.get('/', ctrl.getAllFeelings)
router.get('/:type', ctrl.getFeelings)
router.post('/:type', ctrl.createFeelings)
router.post('/', ctrl.createFeeling)

// router.patch('/:type', ctrl.updateFeelings)

module.exports = router
