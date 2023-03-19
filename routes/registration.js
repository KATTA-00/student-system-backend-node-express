const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

router.get("/", async (req, res) => {
  const data = await Student.find();
  res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const temp = { ...req.body };
  // temp.id = data[data.length - 1].id + 1;
  // data.push(temp);
  // console.log(req.body);

  const result = await Student.create(temp);

  res.status(200).send("hii");
});

module.exports = router;
