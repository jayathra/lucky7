import './Inputs.css';
import { rollDie } from './utils';

export default function Inputs({ inputs, setInputs}) {
    
    return(
        <>
            <div>
                <label htmlFor="target">Target</label>
                <input id="target" min={inputs.dice} max={inputs.dice * 6} className="inputs" type="number" placeholder="target" value={inputs.target} onChange={(e)=>setInputs({...inputs, target: Number(e.target.value)})} />
            </div>
            <div>
                <label htmlFor="numDice">Number of Dice</label>
                <input id="numDice" min="1" className="inputs" type="number" placeholder="number of dice" value={inputs.dice} onChange={(e)=> {
                    setInputs({...inputs, dice: Number(e.target.value), roll: rollDie(Number(e.target.value)), target: (inputs.target < Number(e.target.value) || inputs.target > Number(e.target.value) * 6) 
                        ? Number(e.target.value) 
                        : inputs.target});
                }} />
            </div> 
        </>
    )
}