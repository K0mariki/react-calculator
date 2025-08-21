import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("0");

  function increment() {
    setInput((prev) => eval(`${prev}+1`));
  }
  function decrement() {
    setInput((prev) => eval(`${prev}-1`));
  }

  function changeInput(char) {
    switch (char) {
      case "C":
        setInput("0");
        break;
      case "=":
        setInput(eval(input));
        break;
      case "÷":
        setInput((prev) => `${prev}/`);
        break;
      case "x":
        setInput((prev) => `${prev}*`);
        break;
      case ",":
        setInput((prev) => `${prev}.`);
        break;
      default:
        if (input == "0") {
          setInput("");
        }
        setInput((prev) => `${prev}${char}`);
    }
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState калькулятор</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button onClick={increment} className="increment">
            +1
          </button>
          <button onClick={decrement} className="decrement">
            -1
          </button>
        </div>
        <div
          onClick={(event) => {
            event.target.tagName == "BUTTON"
              ? changeInput(event.target.innerText)
              : null;
          }}
          className="buttons"
        >
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="operator">+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="operator">-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="operator">x</button>
          <button>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button className="operator">÷</button>
          <button className="clear">C</button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Используемые технологии:</strong> React, JSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
