const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controller/feelings')

router.get('/:type', ctrl.getFeelings)


module.exports = router
