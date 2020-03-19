import React, { useState } from "react";
import Input from "./Components/Input";
import PasswordButton from "./Components/Button";
import { randomizeChars, copyToClipboard } from "./helper/helper";
import "./App.css";

function App() {
  const [password, setPassword] = useState("Password will appear here");

  const copyPassword = password => {
    if (password !== "Password will appear here")
      return password.toString().replace(/,/g, "");
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>
        Safe Pass
      </h1>
      <Input
        label={password}
        save={() => {
          copyToClipboard(copyPassword(password));
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
