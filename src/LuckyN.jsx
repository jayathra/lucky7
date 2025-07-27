import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';

const DEFAULT_TARGET = 7;
const DEFAULT_DICE = 2;

export default function LuckyN() {

    const [inputs, setInputs] = useState({target: DEFAULT_TARGET, dice: DEFAULT_DICE, roll: rollDie(DEFAULT_DICE)})

    return (
        <>
            <h1>Lucky{inputs.target} {isWinner(inputs.roll, inputs.target) && <span>WINNER WINNER!</span>}</h1>
            <Inputs inputs={inputs} setInputs={setInputs} />
            <Dice roll={inputs.roll}
                onButtonClick={() => setInputs({...inputs, roll: rollDie(inputs.dice)})} />
        </>       
    )
}