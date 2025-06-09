const express = require('express')

const v1Router = require('./v1')
const v2Router = require('./v2')
const homepingController = require('../controllers/home.controllers')

const router = express.Router()

router.use('/v1', v1Router)
router.use('/v2', v2Router)

router.get('/home', homepingController)
router.get('/homeComming', homepingController)


module.exports = router