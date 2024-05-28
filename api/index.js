const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const cookieParser = require("cookie-parser");

const saltRounds = 10;
const secret = "asdfkasdkdsfs";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(
  "mongodb+srv://ankushrajpoot2004:2W58oeRRz1K9ZQku@cluster0.orplaxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", uploadMiddleware.single("file"), async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  console.log(req.file);

  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;

  fs.renameSync(path, newPath);

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
      cover: newPath,
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
  // console.log("userDoc in login ", userDoc);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) console.log("jwt error: ", err);
      res
        .cookie("token", token)
        .json({
          id: userDoc._id,
          username,
        })
        .status(200);
    });
  } else {
    res.status(400).json("wrong credentials: ", username + " " + password);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    res.json(info);
  });
});

app.get("/userDetails", (req, res) => {
  console.log(req.body);
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    // const response = await User.findOne(info.username);

    const { username } = info;
    console.log(username);
    const response = await User.findOne({ username });
    const { email, cover } = response;
    res.json({ username, email, cover });
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("logged out successfully");
});

app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});

//MongoDb pass:Ankush@2004
//Username: ankushrajpoot2004
// mongodb+srv://ankushrajpoot2004:Ankush@2004@cluster0.dagoaet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// 2W58oeRRz1K9ZQku