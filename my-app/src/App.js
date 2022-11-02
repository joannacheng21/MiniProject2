import './App.css';
import { useState } from 'react';
import LRButton from './LRButton';
import GenerateFactButton from './GenerateFactButton';
import PreviousFactList from './PreviousFactList';

function App() {
  const [currFact, setCurrFact] = useState("");
  const [prevFacts, setPrevFacts] = useState([]);
  const [favorited, setFavorited] = useState([]);
  const [prevFactInd, setPrevFactInd] = useState(0);

  return (
    <div className="App">
      <div id="title">
        <header id="titletext">Cat Facts</header>
      </div>
      <p id="currentFact">{currFact}</p>
      <GenerateFactButton currFact={currFact} setCurrFact={setCurrFact} prevFacts={prevFacts} setPrevFacts={setPrevFacts} favorited={favorited} setFavorited={setFavorited}/>
      <PreviousFactList prevFacts={prevFacts} prevFactInd={prevFactInd} favorited={favorited} setFavorited={setFavorited}/>
      <div id="arrowbuttons">
        <LRButton isLeft={true} prevFactInd={prevFactInd} setPrevFactInd={setPrevFactInd} prevFactsLength={prevFacts.length}/>
        <LRButton isLeft={false} prevFactInd={prevFactInd} setPrevFactInd={setPrevFactInd} prevFactsLength={prevFacts.length}/>
      </div>
      <p id="pagenum">Page {prevFactInd/10 + 1} of {Math.round(prevFacts.length/10 + 0.49)}</p>
    </div>
  );
}

export default App;
