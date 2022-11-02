import './App.css';
import { useState } from 'react';

function App() {
  const [currFact, setCurrFact] = useState("");

  function fetchFact() {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => setCurrFact(data.fact));
  }

  return (
    <div className="App">
      <header id="title">Cat Facts</header>
      <p id="currFact">{currFact}</p>
      <button id="generateButton" onClick={fetchFact}>Generate Fact</button>
    </div>
  );
}

export default App;
