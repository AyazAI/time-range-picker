import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [startRange] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ]);
  const [endRange, setEndRange] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ]);

  let count = 0;

  const handleStart = (e) => {
    console.log(e.target.value);
    setStart(e.target.value);
    let newEndRange = endRange.slice(e.target.value);
    setEndRange(newEndRange);

    // set the upper count
    // setCount(count + 1);
    count++;

    if (count > 0) {
      setEndRange(startRange);
      let newEndRange = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ].slice(e.target.value);
      setEndRange(newEndRange);
      // setCount(0);
      count = 0;
    }
  };

  const handleEnd = (e) => {
    console.log(e.target.value);
    setEnd(e.target.value);
  };

  const handleReset = () => {
    setStart("");
    setEnd("");
    setEndRange(startRange);
  };

  const handleSubmit = (e) => {
    if (start !== "" && end !== "") {
      console.log(start, end);
    } else {
      console.log("empty");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Start
        <select value={start} onChange={handleStart}>
          <option>--- Select</option>
          {startRange.map((val, index) => (
            <option key={index}>
              {val >= 12 ? `${val - 12} PM` : `${val} AM`}
            </option>
          ))}
        </select>
        End
        <select value={end} onChange={handleEnd}>
          <option>--- Select</option>
          {endRange.map((val, index) => (
            <option key={index}>{val}</option>
          ))}
        </select>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
