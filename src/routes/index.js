const express = require('express')
const homepingController = require('../controllers/home.controllers')

const router = express.Router()


router.get('/home', homepingController)
router.get('/homeComming', homepingController)


module.exports = router