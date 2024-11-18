import React, { useState } from "react";

function App() {
  const [numberOfDice, setNumberOfDice] = useState(null);
  const [results, setResults] = useState([]);

  //Function to generate the results randomly
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function handleRoll() {
    if (numberOfDice < 1 || numberOfDice > 12) {
      alert("Pleases enter a nuber between 1 and 12");
      return;
    }
    const diceResults = [];
    for (let i = 0; i < numberOfDice; i++) {
      diceResults.push(rollDice());
    }
    setResults(diceResults);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dice Roller</h1>
      <input
        type="number"
        min="1"
        max="12"
        value={numberOfDice}
        onChange={(e) => setNumberOfDice(Number(e.target.value))}
        placeholder="Enter number of dice"
        style={{ width: "200px", padding: "8px" }}
      />
      <button onClick={handleRoll} style={{ width: "50px", padding: "8px" }}>
        Roll
      </button>

      {/* Dice Display Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Dice Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {results.map((result, index) => (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                border: "1px solid black",
                borderRadius: "8px",
                background: "pink",
              }}
            >
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
