import { rollDie } from "./utils";
import './Button.css'

export default function Button( { inputs, setInputs } ) {
    return (
        <button onClick={() => {setInputs({...inputs, roll: rollDie(inputs.dice)})}}>Roll Die</button>
    )
}