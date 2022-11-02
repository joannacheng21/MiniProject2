import PreviousFact from "./PreviousFact";

function PreviousFactList(props) {
    const { prevFacts, prevFactInd, favorited, setFavorited } = props;

    return(
        <div>
            <p className="previousFactList">
                {prevFacts.slice(prevFactInd, prevFactInd + 10).map(
                (f, ind) => (<PreviousFact fact={f} ind={prevFactInd + ind} favorited={favorited} setFavorited={setFavorited}/>))}
            </p>
        </div>
    );
}

export default PreviousFactList;