require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const pool = require('./db');
const PORT = process.env.PORT || 3333;

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth')

// server set up
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//cookie
app.get("/", function (req, res) {
  res.cookie("name", "express", { maxAge: 360000 }).send("cookie set"); //Sets name = express
  console.log("Cookies: ", req.cookies);
});

// client routes
var options = { redirect: false };
app.use(express.static("./client/build", options));
app.use("/login", express.static("./client/build", options));
app.use("/register", express.static("./client/build", options));
app.use("/404", express.static("./client/build", options));

// server routes
app.get("/bb", (req,res) => {
    res.status(200).send("Welcome to BlankBoard API!");
})
app.use('/bb', userRoutes(pool));
app.use('/bb', postRoutes(pool));
app.use('/bb/auth', authRoutes(pool));

app.use("*", express.static("client/build"));

app.listen(PORT, () => {
  console.log(`Server is up and listening for ${PORT}`);
});
