import './Inputs.css';
import { rollDie } from './utils';

export default function Inputs({ target, setTarget, dice, setDice, setRoll }) {
    return(
        <>
            <input className="inputs" type="number" placeholder="target" value={target} onChange={(e)=>setTarget(Number(e.target.value))} />
            <input className="inputs" type="number" placeholder="number of dice" value={dice} onChange={(e)=> {
                setDice(Number(e.target.value));
                setRoll(rollDie(Number(e.target.value)));
             }} />
        </>
    )
}