import './Dice.css'
import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';

const target = 11;
const numDie = 2;

export default function LuckyN() {

    const [roll, setRoll] = useState(rollDie(numDie));

    return (
        <>
            <h1>Lucky{target}</h1>
            <Dice roll={roll} setRoll={setRoll} />
            {isWinner(roll, target) && <h3>WINNER WINNER!</h3>}
        </>
        
    )
}