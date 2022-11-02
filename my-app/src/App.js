import './App.css';
import { useState } from 'react';
import PreviousFact from './PreviousFact';
import LRButton from './LRButton';

function App() {
  const [currFact, setCurrFact] = useState("");
  const [prevFacts, setPrevFacts] = useState([]);
  const [prevFactInd, setPrevFactInd] = useState(0);
  const [favorited, setFavorited] = useState([]);

  function fetchFact() {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then((data) => {
      let pfacts = prevFacts;
      let favfacts = favorited;
      if (pfacts.length === 0) {
        pfacts = [currFact];
        favfacts = [false];
      } else {
        pfacts.unshift(currFact);
        favfacts.unshift(false);
      }
      if (currFact !== "") {
        setPrevFacts(pfacts);
        setFavorited(favfacts);
      }
      setCurrFact(data.fact);
    });
  }

  return (
    <div className="App">
      <header id="title">Cat Facts</header>
      <p id="currentFact">{currFact}</p>
      <button id="generateButton" onClick={fetchFact}>Generate Fact</button>
      <p className="previousFactList">
        {prevFacts.slice(prevFactInd, prevFactInd + 10).map(
          (f, ind) => (<PreviousFact fact={f} ind={prevFactInd + ind} favorited={favorited} setFavorited={setFavorited}/>))}
      </p>
      <LRButton isLeft={true} prevFactInd={prevFactInd} setPrevFactInd={setPrevFactInd} prevFactsLength={prevFacts.length}/>
      <LRButton isLeft={false} prevFactInd={prevFactInd} setPrevFactInd={setPrevFactInd} prevFactsLength={prevFacts.length}/>
      <p id="pagenum">Page {prevFactInd/10 + 1} of {Math.round(prevFacts.length/10 + 0.49)}</p>
    </div>
  );
}

export default App;
