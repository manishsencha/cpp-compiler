const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const request = require("request");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.send({ server: "Running" });
});

app.post("/", (req, res) => {
  var code = req.body.code;
  var ip = req.body.ip;
  var program = {
    script: code,
    language: "cpp",
    versionIndex: "0",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program,
    },
    function (error, response, body) {
      return res.send({ stdout: body.output });
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
