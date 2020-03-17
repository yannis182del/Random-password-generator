import React, { useState } from "react";
import Input from "./Components/Input";
import PasswordButton from "./Components/Button";
import { randomizeChars, copyToClipboard } from "./helper/helper";
import "./App.css";

function App() {
  const [password, setPassword] = useState("Password will appear here");

  let replaceComma = password.toString().replace(/,/g, "");
  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <Input label={password} />
      <PasswordButton
        title="Generate a random password"
        onClick={() => setPassword(randomizeChars())}
      />
      <PasswordButton
        title="Copy"
        onClick={() => copyToClipboard(replaceComma)}
      />
    </div>
  );
}

export default App;
