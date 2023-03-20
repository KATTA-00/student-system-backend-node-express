const express = require("express");
const router = express.Router();
const Student = require("../model/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = await Student.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    const refreshToken = jwt.sign(
      { name: foundUser.firstname + " " + foundUser.lastname },
      "secretecode",
      { expiresIn: "900s" }
    );
    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();

    res.status(200).json({ refreshToken });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
