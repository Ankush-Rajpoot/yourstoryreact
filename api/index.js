const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const secret = "asdfkasdkdsfs";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nakesh1107:nU9W6K0IVOl4qS9E@cluster0.cgenlzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // const hashPassword = await bcrypt.hash(password, saltRounds);
  // console.log("hashpass", hashPassword);
  // await bcrypt.compare(password, hash).then(function (result) {
  //   // result == true
  //   console.log("true");
  // });

  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    const response = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.json(response);
    console.log(req.body);
  } catch (e) {
    console.log("Register Error at server: " + e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });

  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) console.log("jwt error: ", err);
      res.cookie("token", token).json("ok").status(200);
    });
  } else {
    res.status(400).json("wrong credentials: ", username + " " + password);
  }
});

app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});

//MongoDb pass:nU9W6K0IVOl4qS9E
//Username: nakesh1107
// mongodb+srv://nakesh1107:nU9W6K0IVOl4qS9E@cluster0.cgenlzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
