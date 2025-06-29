const router = require('express').Router();
const { createStudent, allStudents, getStudent, updateSchool, updateStudent, deleteStudent } = require('../controllers/studentController');


router.post("/", createStudent);
router.get("/", allStudents);
router.get("/:id", getStudent)
router.patch("/school", updateSchool);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
