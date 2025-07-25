import './Inputs.css';
import { rollDie } from './utils';

export default function Inputs({ inputs, setInputs}) {
    return(
        <>
            <div>
                <label htmlFor="target">Target</label>
                <input id="target" className="inputs" type="number" placeholder="target" value={inputs.target} onChange={(e)=>setInputs({...inputs, target: Number(e.target.value)})} />
            </div>
            <div>
                <label htmlFor="numDice">Number of Dice</label>
                <input id="numDice" className="inputs" type="number" placeholder="number of dice" value={inputs.dice} onChange={(e)=> {
                    setInputs({...inputs, dice: Number(e.target.value), roll: rollDie(Number(e.target.value))});
                }} />
            </div> 
        </>
    )
}