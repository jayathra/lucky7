import { rollDie } from "./utils";
import './Button.css'

export default function Button( {setRoll} ) {
    return (
        <button onClick={() => setRoll(rollDie(2))}>Roll Die</button>
    )
}