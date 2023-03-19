const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

router.post("/", async (req, res) => {
  const temp = { ...req.body };

  const result = await Student.create(temp);

  res.status(200).json(result);
});

module.exports = router;
