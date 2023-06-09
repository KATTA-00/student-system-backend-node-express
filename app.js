const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = require("./config/connectDB");
const register = require("./routes/registration");
const students = require("./routes/students");
const login = require("./routes/login");

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/register", register);
app.use("/students", students);
app.use("/log", login);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// DATABASE_URL = mongodb+srv://katta123:katta123@cluster0.qxwpxve.mongodb.net/StudetnDetailsDB?retryWrites=true&w=majority
