import { useState } from "react";

function App() {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutput = outputString + letter;
    newOutput = newOutput.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newOutput);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <>
      <div className="container">
        <div className="grid">
          {alphabet.split("").map((letter) => (
            <div
              key={letter}
              className="tile"
              onClick={() => handleClick(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
        <h1>Output String</h1>
        <div id="outputString">
          {" "}
          {outputString ? outputString : "Please click first!"}
        </div>
      </div>
    </>
  );
}

export default App;
