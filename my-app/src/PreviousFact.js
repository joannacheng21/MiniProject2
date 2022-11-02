import { useState } from 'react';

function PreviousFact(props) {
    const { fact } = props;
    const [isFavorited, setIsFavorited] = useState(false);

    function toggleFavorited() {
        setIsFavorited(!isFavorited);
    }

    return(
        <div>
            <p className="previousFact" style={{backgroundColor: isFavorited ? 'salmon' : ''}} onClick={toggleFavorited}>
                {fact}
            </p>
        </div>
    )
}

export default PreviousFact;