import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';

export default function LuckyN() {

    const [dice, setDice] = useState(2);
    const [roll, setRoll] = useState(rollDie(dice));
    const [target, setTarget] = useState(7);

    return (
        <>
            <h1>Lucky{target} {isWinner(roll, target) && <span>WINNER WINNER!</span>}</h1>
            <Inputs target={target} setTarget={setTarget} dice={dice} setDice={setDice} setRoll={setRoll} />
            <Dice roll={roll} setRoll={setRoll} dice={dice} />
        </>       
    )
}