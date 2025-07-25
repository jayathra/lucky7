import './Dice.css'
import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';

const target = 7;
const numDie = 2;

export default function LuckyN() {

    const [roll, setRoll] = useState(rollDie(numDie));

    return (
        <>
            <h1>Lucky{target} {isWinner(roll, target) && <span>WINNER WINNER!</span>}</h1>
            <Dice roll={roll} setRoll={setRoll} />
        </>
        
    )
}