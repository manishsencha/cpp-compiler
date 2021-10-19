const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const exec = require("child_process").exec
require("dotenv").config()

const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  return res.render("index.html")
})
app.post("/", (req, res) => {
  const code = req.body.code
  const ip = req.body.ip
  fs.writeFile("code.cpp", code, (err) => {
    if (err) return res.send({ error: err })
    console.log("Code Saved successfully")
  })
  fs.writeFile("ip.txt", ip, (err) => {
    if (err) return res.send({ error: err })
    console.log("Input saved successfully")
  })
  exec(
    "apt install g++ && g++ code.cpp -o code && ./code < ip.txt",
    function (error, stdout, stderr) {
      if (stdout) {
        fs.unlinkSync("code", (err) => {
          if (err) {
            console.log(err)
          } else {
            console.log("File deleted")
          }
        })
      }
      fs.unlinkSync("code.cpp", (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("File deleted")
        }
      })
      fs.unlinkSync("ip.txt", (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("File deleted")
        }
      })
      return res.send({ error: error, stdout: stdout, stderr: stderr })
    }
  )
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
