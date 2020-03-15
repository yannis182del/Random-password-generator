import React, { useState } from "react";
import Input from "./Components/Input";
import PasswordButton from "./Components/Button";
import "./App.css";
import {randomizeChars} from "./helper/helper";

function App() {
  const [password, setPassword] = useState("Password will appear here");
  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <Input label={password} />
      <PasswordButton onClick={() => setPassword(randomizeChars)} />
    </div>
  );
}

export default App;
