require("dotenv").config();
const express = require("express");
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3001;

app.get("/api/", (req,res) => {
    res.status(200).send("Welcome to BlankBoard API!");
})

app.listen(PORT, () => {
    console.log(`Server is up and listening for ${PORT}`)
})