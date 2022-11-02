function GenerateFactButton(props) {
    const { currFact, setCurrFact, prevFacts, setPrevFacts, favorited, setFavorited } = props;

    function fetchFact() {
        fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then((data) => {
          let pfacts = [...prevFacts];
          let favfacts = [...favorited];
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

    return(
        <div>
            <button id="generateButton" onClick={fetchFact}>Generate Fact</button>
        </div>
    );
}

export default GenerateFactButton;