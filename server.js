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
    source: code,
    compiler: "g102",
    options: {
      userArguments: "-std=c++20",
      executeParameters: {
        args: ["", ""],
        stdin: ip,
      },
      compilerOptions: {
        executorRequest: true,
      },
      filters: {
        execute: true,
      },
      tools: [],
      libraries: [{ id: "boost", version: "1.75.0" }],
    },
    lang: "c++",
    allowStoreCodeDebug: true,
  };
  request(
    {
      url: "https://godbolt.org/api/compiler/g102/compile",
      method: "POST",
      json: program,
    },
    function (error, response, body) {
      console.log("Response : " + response);
      console.log("Stdout : " + body.stdout);
      console.log("Stderr " + body.stderr);
      console.log("Stdout : " + console.log(body.data));
      return res.send({ stdout: body });
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
