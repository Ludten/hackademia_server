const Student = require("../Models/student");

const createStudent = async (req, res) => {
  const { firstName, lastName, school, dob } = req.body;
  const newStudent = await Student.create({ firstName, lastName, school, dob });
  return res.status(201).json(newStudent);  
}

const allStudents = async (req, res) => {
  const users = await Student.findAll();
  return res.json(users);
}

const getStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findOne({ 
    where: { id }
   });
  return res.json(student);
}

const updateSchool = async (req, res) => {
  const { school } = req.query;
  const student = await Student.update(
    { school: "Hackademia Institute" },
    { 
    where: { school: school }
   });
  return res.json(student);
}

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findOne({ 
    where: { id }
  });
  student.firstName = req.body.firstName || student.firstName;
  student.lastName = req.body.lastName || student.lastName;
  student.dob = req.body.dob || student.dob;
  student.save();
   
  return res.json(student);
}

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.destroy({ 
    where: { id }
  });
  
  return res.json(student);
}


module.exports = {
  createStudent,
  allStudents,
  getStudent,
  updateSchool,
  updateStudent,
  deleteStudent
}
