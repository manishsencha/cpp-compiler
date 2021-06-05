const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const exec = require("child_process").exec;
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
  fs.writeFile("./a.cpp", code, (err) => {
    // console.log(err);
  });
  fs.writeFile("./a.txt", ip, (err) => {});
  exec("g++ a.cpp -o a", (err, stdout, stderr) => {
    // console.log(err);
    // console.log(stdout);
    // console.log(stderr);
    if (err) {
      fs.writeFile("./a.cpp", "", (err) => {});
      fs.writeFile("./a.txt", "", (err) => {});

      return res.send({ stdout: stdout, stderr: stderr });
    }
    exec(".\\a < a.txt", (err, stdout, stderr) => {
      // console.log(err);
      // console.log(stdout);
      // console.log(stderr);
      fs.writeFile("./a.cpp", "", (err) => {});
      fs.writeFile("./a.txt", "", (err) => {});
      return res.send({ stdout: stdout, stderr: stderr });
    });
  });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
