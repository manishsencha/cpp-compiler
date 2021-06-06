const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { c, cpp, node, python, java } = require("compile-run");
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
  fs.writeFile("./a.cpp", code, (err) => {});
  fs.writeFile("./a.txt", ip, (err) => {});
  cpp.runFile("a.cpp", { stdin: ip }).then((result) => {
    fs.writeFile("./a.cpp", "", (err) => {});
    return res.send({ stdout: result.stdout, stderr: result.stderr });
  });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
