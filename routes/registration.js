const express = require("express");
const router = express.Router();

const data = [
  {
    id: 1,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 2,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 3,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 4,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 5,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 6,
    firstname: "Kanishka",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
  {
    id: 7,
    firstname: "Hi",
    lastname: "Gunawardana",
    Eno: "E/19/129",
    email: "kanishkagunawardana@gmail.com",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.post("/", (req, res) => {
  const temp = { ...req.body };
  temp.id = data[data.length - 1].id + 1;
  data.push(temp);
  console.log(req.body);
  res.status(200).send("hii");
});

module.exports = router;
