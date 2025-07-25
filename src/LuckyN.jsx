import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';

export default function LuckyN() {

    const [inputs, setInputs] = useState({target: 7, dice: 2})
    const [roll, setRoll] = useState(rollDie(inputs.dice));

    return (
        <>
            <h1>Lucky{inputs.target} {isWinner(roll, inputs.target) && <span>WINNER WINNER!</span>}</h1>
            <Inputs inputs={inputs} setInputs={setInputs} setRoll={setRoll} />
            <Dice roll={roll} setRoll={setRoll} dice={inputs.dice} />
        </>       
    )
}