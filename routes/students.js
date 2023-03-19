const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

router.get("/", async (req, res) => {
  const result = await Student.find();
  res.status(200).json(result);
});

module.exports = router;
