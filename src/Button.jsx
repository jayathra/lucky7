import { rollDie } from "./utils";
import './Button.css'

export default function Button( {setRoll, dice} ) {
    return (
        <button onClick={() => setRoll(rollDie(dice))}>Roll Die</button>
    )
}