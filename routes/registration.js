const express = require("express");
const router = express.Router();
const Student = require("../model/Student");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const tempStudent = { ...req.body };

  const duplicate = await Student.findOne({
    username: tempStudent.username,
  }).exec();
  if (duplicate) return res.status(409).send("username");

  const exist = await Student.findOne({
    firstname: tempStudent.firstname,
    lastname: tempStudent.lastname,
    Eno: tempStudent.Eno,
    email: tempStudent.email,
  }).exec();
  if (exist) return res.status(409).send("User");

  try {
    const hashedPwd = await bcrypt.hash(tempStudent.password, 10);

    tempStudent.password = hashedPwd;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  const result = await Student.create(tempStudent);

  res.status(200).json(result);
});

module.exports = router;
