const express = require('express');
const { getstudent, addStudent, getSpecificStudent, updateStudent } = require('../controllers/student');

const router = express.Router()

router.get('/getstudent', getstudent);
router.post('/addstudent', addStudent);
router.get('/specstud/:_id', getSpecificStudent);
router.put('/editstudent/:name', updateStudent)

module.exports = router;