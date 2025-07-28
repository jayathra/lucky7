import './Inputs.css';

export default function Inputs({ targetVal, numDice, targetValChangeHandler, numDiceChangeHandler}) {
    
    return(
        <div>
            <div>
                <label htmlFor="targetVal">Target</label>
                <input id="targetVal"
                    min={numDice}
                    max={numDice * 6}
                    className="inputs"
                    type="number"
                    placeholder="target"
                    value={targetVal}
                    onChange={(e)=>targetValChangeHandler(e)} />
            </div>
            <div>
                <label htmlFor="numDice">Number of Dice</label>
                <input id="numDice"
                    min="1"
                    className="inputs"
                    type="number"
                    placeholder="number of dice"
                    value={numDice}
                    onChange={(e)=> numDiceChangeHandler(e)} />
            </div> 
        </div>
    )
}