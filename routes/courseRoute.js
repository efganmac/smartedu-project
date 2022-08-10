const courseController = require('../controllers/courseController')
const express = require('express')


const router = express.Router()

router.route('/').post(courseController.createCourse)
router.route('/').get(courseController.getAllCourses)
router.route('/:id').get(courseController.getCourse)

module.exports = router
