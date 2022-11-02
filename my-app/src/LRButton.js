function LRButton(props) {
    const { isLeft, prevFactInd, setPrevFactInd, prevFactsLength } = props;
    let grayedOut = false;

    if (isLeft) {
        if (prevFactInd <= 0) {
            grayedOut = true;
        }
        return(
            <div>
                <button className="lrbutton" onClick={() => {
                    if (!grayedOut) {
                        setPrevFactInd(prevFactInd - 10);
                    }
                }}>{'<'}</button>
            </div>
        );
    }

    else {
        if (prevFactInd + 10 >= prevFactsLength) {
            grayedOut = true;
        }

        return(
            <div>
                <button className="lrbutton" onClick={() => {
                    if (!grayedOut) {
                        setPrevFactInd(prevFactInd + 10);
                    }
                }}>{'>'}</button>
            </div>
        );
    }
}

export default LRButton;