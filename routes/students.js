const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

router.get("/", async (req, res) => {
  const result = await Student.find();
  res.status(200).json(
    result.map((student) => {
      return {
        _id: student._id,
        firstname: student.firstname,
        lastname: student.lastname,
        Eno: student.Eno,
        email: student.email,
      };
    })
  );
});

module.exports = router;
