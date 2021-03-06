import React, { useState } from "react";
import Input from "./Components/Input";
import PasswordButton from "./Components/Button";
import { randomizeChars, copyToClipboard } from "./helper/helper";
import "./App.css";

function App() {
  const [password, setPassword] = useState("Password will appear here");

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>
        Safe Pass
      </h1>
      <Input
        label={password.toString().replace(/,/g, "")}
        save={() => {
          copyToClipboard(password.toString().replace(/,/g, ""));
        }}
      />
      <PasswordButton
        title="Generate me"
        onClick={() => {
          setPassword(randomizeChars());
        }}
      />
    </div>
  );
}

export default App;
