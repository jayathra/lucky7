import './Dice.css'
import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';

export default function LuckyN() {

    const [roll, setRoll] = useState(rollDie(2));

    return (
        <>
            <Dice roll={roll} setRoll={setRoll} />
            {isWinner(roll, 11) && <h3>WINNER WINNER!</h3>}
        </>
        
    )
}