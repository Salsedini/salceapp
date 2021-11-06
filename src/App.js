import './App.css';
import React, { useState } from "react";
import salcedo from "./salcedo.png";
import getOutput from "./salceapi"

function App() {

  const [AL, setAL] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://twitter.com/Salcedini">
          <img src={salcedo} alt="salcedo" />
        </a>
        <p>{AL}</p>
        <button class="dropbtn" onClick={() => setAL(getOutput)}>Qué te toca beber 😈</button>
      </header>
    </div>
  );
}

export default App;
