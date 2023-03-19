const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const register = require("./routes/registration");
const students = require("./routes/students");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/register", register);
// app.use("/students", students);

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
