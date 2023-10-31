import React, { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCode value={text} />
      <h3>Enter your text here 🤓</h3>
      <div>
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default App;
