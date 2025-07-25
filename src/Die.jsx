import './Die.css'
import { useState } from 'react';
import {rollDie, isWinner} from './utils.jsx'

export default function Die() {

    const [roll, setRoll] = useState(rollDie(2));

    return (
        <>
            <div className="group">
                {roll.map((d) => <div className="die">{d}</div>)}
            </div>
            <button onClick={() => setRoll(rollDie(2))}>Roll Die</button>
            {isWinner(roll) && <h3>WINNER WINNER!</h3>}
        </>
        
    )
}