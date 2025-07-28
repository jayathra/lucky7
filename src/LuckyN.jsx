import { useState } from 'react';
import { rollDie, isWinner } from './utils.jsx'
import Dice from './Dice.jsx';
import Inputs from './Inputs.jsx';
import Button from './Button.jsx';

export default function LuckyN() {

    const TARGET_VAL_INIT = 7;
    const NUM_DICE_INIT = 2;

    const [inputs, setInputs] = useState({targetVal: TARGET_VAL_INIT, diceArray: rollDie(NUM_DICE_INIT)})

    const onClickHandler = () => {
        setInputs({...inputs, diceArray: rollDie(inputs.diceArray.length)})
    }

    const targetValChangeHandler = (e) => {
        setInputs({...inputs, targetVal: Number(e.target.value)})
    }

    const numDiceChangeHandler = (e) => {
        const numDice = Number(e.target.value);
        setInputs({
            ...inputs,
            diceArray: rollDie(numDice),
            targetVal: (inputs.targetVal < numDice || inputs.targetVal > numDice * 6) 
            ? numDice 
            : inputs.targetVal});
    }

    return (
        <>
            <h1>Lucky{inputs.targetVal} {isWinner(inputs.diceArray, inputs.targetVal) && <span>WINNER WINNER!</span>}</h1>
            <Inputs targetValChangeHandler={targetValChangeHandler}
                numDiceChangeHandler={numDiceChangeHandler}
                targetVal={inputs.targetVal}
                numDice={inputs.diceArray.length} />
            <Dice diceArray={inputs.diceArray} />
            <Button onClickHandler={onClickHandler} />
        </>       
    )
}