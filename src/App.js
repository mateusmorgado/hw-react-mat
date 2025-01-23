import React, { useState } from "react"; // Import useState from React
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [variant, setVariant] = useState("success");
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

        <div className="divider-50px" />

        <div className="form-range-a">
          <Form.Label>Range</Form.Label>
          <Form.Range
            value={value}
            onChange={handleChange}
            min={0}
            max={100}
            data-testid="range-slider"
          />
          <p>Selected Value: {value}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
