import './App.css';
import { useState } from 'react';

function App() {
  const [currFact, setCurrFact] = useState("");
  const [prevFacts, setPrevFacts] = useState([]);

  function fetchFact() {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then((data) => {
      let pfacts = prevFacts;
      if (pfacts.length === 0) {
        pfacts = [currFact];
      } else {
        pfacts.unshift(currFact);
        if (pfacts.length > 10) {
          pfacts = pfacts.slice(0, -1);
        }
      }
      console.log(pfacts);
      if (currFact !== "") {
        setPrevFacts(pfacts);
      }
      setCurrFact(data.fact);
    });
  }

  return (
    <div className="App">
      <header id="title">Cat Facts</header>
      <p id="currFact">{currFact}</p>
      <button id="generateButton" onClick={fetchFact}>Generate Fact</button>
      <p>{prevFacts.map(f => (<p>{f}</p>))}</p>
    </div>
  );
}

export default App;
