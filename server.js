const fs = require('fs');
const http=require("http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const serverDB = require("./serverDb.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

const path = require('path');
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/files", express.static(path.join(__dirname, "files")));
//creazione delle due tabelle del database
executeQuery(`CREATE TABLE IF NOT EXISTS type (
    id INT PRIMARY KEY,
    name VARCHAR(255));
`);
executeQuery(`CREATE TABLE IF NOT EXIST booking (
    id INT PRIMARY KEY,
    idType INT,
    date DATE,
    hour INT,
    name VARCHAR(50),
    FOREIGN KEY (idType) REFERENCES type(id));
`);

const server = http.createServer(app);

  server.listen(5500, () => {
  
    console.log("- server running");
  
});