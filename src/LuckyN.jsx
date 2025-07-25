import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';

export default function LuckyN() {

    const [inputs, setInputs] = useState({target: 7, dice: 2, roll: rollDie(2)})

    return (
        <>
            <h1>Lucky{inputs.target} {isWinner(inputs.roll, inputs.target) && <span>WINNER WINNER!</span>}</h1>
            <Inputs inputs={inputs} setInputs={setInputs} />
            <Dice inputs={inputs} setInputs={setInputs} />
        </>       
    )
}