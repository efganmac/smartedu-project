const categoryController = require('../controllers/categoryController')
const express = require('express')


const router = express.Router()

router.route('/').post(categoryController.createCategory)


module.exports = router
