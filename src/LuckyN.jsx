import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';

const numDie = 2;

export default function LuckyN() {

    const [roll, setRoll] = useState(rollDie(numDie));
    const [target, setTarget] = useState(7);

    return (
        <>
            <h1>Lucky{target} {isWinner(roll, target) && <span>WINNER WINNER!</span>}</h1>
            <Inputs target={target} setTarget={setTarget} />
            <Dice roll={roll} setRoll={setRoll} />
        </>       
    )
}