const express = require('express');
const { getstudent, addStudent, getSpecificStudent, updateStudent, deleteStudent } = require('../controllers/student');
const verify = require('../controllers/authverify')
const router = express.Router()

router.get('/getstudent', verify, getstudent);
router.post('/addstudent', verify, addStudent);
router.get('/specstud/:_id', verify, getSpecificStudent);
router.put('/editstudent/:name', verify, updateStudent)
router.delete('/deletestudent/:roll', verify, deleteStudent)

module.exports = router;