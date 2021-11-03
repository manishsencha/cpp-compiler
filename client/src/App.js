import React, { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"
import "./App.css"
import axios from "axios"

function App() {
  const [code, setCode] = useState("")
  const [ip, setIp] = useState("")
  const [output, setOutput] = useState("")
  const [compiling, setCompiling] = useState(false)
  useEffect(() =>
    alert(
      "Sorry for the incovenience The app is not currently fully functional on web. If you want to use the app please clone the project and use it on your system."
    )
  )
  const handleSubmit = async (e) => {
    e.preventDefault()
    setCompiling(true)
    await axios
      .post(window.location.href, {
        code: code,
        ip: ip,
      })
      .then((res) => {
        const data = res.data
        console.log(data)
        if (data.stderr !== "") {
          return setOutput(data.stderr)
        } else {
          return setOutput(data.stdout)
        }
      })
      .catch((err) => alert(err))
    setCompiling(false)
  }
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
          padding: "10px",
        }}>
        <div style={{ fontSize: 30, color: "white" }}>CPP Compiler</div>
        <div>
          <button
            disabled={compiling}
            onClick={handleSubmit}
            style={{
              height: "40px",
              width: "70px",
              fontSize: "20px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "#ccc",
              border: "none",
            }}>
            Run
          </button>
        </div>
      </div>
      {/**begin editor */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowY: "hidden",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Editor
            height="60vh"
            width="60vw"
            defaultLanguage="cpp"
            defaultValue={code}
            onChange={(e) => setCode(e)}
            options={{ fontSize: 16 }}
          />
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#333",
              padding: "10px",
            }}>
            <span
              style={{
                fontSize: "20px",
                color: "white",
              }}>
              Input
            </span>
            <Editor
              height="100px"
              defaultValue={ip}
              onChange={(e) => setIp(e)}
              options={{ lineNumbers: "off", minimap: { enabled: false } }}
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#333",
              padding: "10px",
            }}>
            <span
              style={{
                fontSize: "20px",
                color: "white",
              }}>
              Output
            </span>
            <Editor
              height="100px"
              options={{
                lineNumbers: "off",
                minimap: { enabled: false },
                readOnly: true,
              }}
              value={output}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
