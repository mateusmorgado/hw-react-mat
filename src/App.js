import React, { useState } from "react"; // Import useState from React
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function App() {
  const [variant, setVariant] = useState("success");

  function onClickChangeColor() {
    if (variant === "success") {
      setVariant("danger");
    } else {
      setVariant("success");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Button with dynamic variant and onClick handler */}
        <Button
          variant={variant}
          onClick={onClickChangeColor}
          data-testid="change-color-button"
        >
          {variant === "success" ? "Success" : "Danger"}
        </Button>

        <Form.Label>Range</Form.Label>
        <Form.Range />

      </header>
    </div>
  );
}

export default App;
