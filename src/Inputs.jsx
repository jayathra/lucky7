import './Inputs.css';
import { rollDie, SIDE_PER_DIE } from './utils';

export default function Inputs({inputs, setInputs}) {
    function validateNumDiceAndUpdateInputs(numDice) {
        const isValidNumDice = inputs.target < numDice || inputs.target > numDice * SIDE_PER_DIE;
        setInputs({
            ...inputs,
            dice: numDice,
            roll: rollDie(numDice),
            target: isValidNumDice ? numDice : inputs.target
        })
    }
    
    return(
        <>
            <div>
                <label htmlFor="targetInput">Target</label>
                <input
                    id="targetInput"
                    min={inputs.dice}
                    max={inputs.dice * SIDE_PER_DIE}
                    className="inputs"
                    type="number"
                    placeholder="target"
                    value={inputs.target}
                    onChange={(e)=>setInputs({...inputs, target: Number(e.target.value)})} />
            </div>
            <div>
                <label htmlFor="numDiceInput">Number of Dice</label>
                <input id="numDiceInput" min="1" className="inputs" type="number" placeholder="number of dice" value={inputs.dice} onChange={(e)=> {
                    validateNumDiceAndUpdateInputs(Number(e.target.value));                    
                }} />
            </div> 
        </>
    )
}