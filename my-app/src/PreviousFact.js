function PreviousFact(props) {
    const { fact, ind, favorited, setFavorited } = props;

    function toggleFavorited() {
        let fav = [...favorited];
        console.log(fav);
        fav[ind] = !fav[ind];
        setFavorited(fav);
    }

    return(
        <div>
            <p className="previousFact" style={{backgroundColor: favorited[ind] ? 'salmon' : ''}} onClick={toggleFavorited}>
                {fact}
            </p>
        </div>
    )
}

export default PreviousFact;