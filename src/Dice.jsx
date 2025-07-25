import { rollDie } from "./utils";
import './Dice.css';
import Die from "./Die.jsx";

export default function Dice({ roll, setRoll }) {
    return (       
        <>
            <Die roll={roll} />
            <button onClick={() => setRoll(rollDie(2))}>Roll Die</button>
        </>
    )
}