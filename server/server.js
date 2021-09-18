require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
var options = { redirect:  false };

app.use(express.static("./client/build", options));
app.use("/login", express.static("./client/build", options));
app.use("/register", express.static("./client/build", options));
app.use("/404", express.static("./client/build", options));

app.get("/api/", (req,res) => {
    res.status(200).send("Welcome to BlankBoard API!");
})

app.use("*", express.static("client/build"));

app.listen(PORT, () => {
    console.log(`Server is up and listening for ${PORT}`)
})