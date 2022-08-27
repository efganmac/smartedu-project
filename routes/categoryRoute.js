const categoryController = require('../controllers/categoryController')
const express = require('express')


const router = express.Router()

router.route('/').post(categoryController.createCategory)
router.route('/:id').delete(categoryController.deleteCategory);

module.exports = router
