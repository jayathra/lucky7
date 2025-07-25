import { rollDie } from "./utils"
import './Dice.css'

export default function Dice({ roll, setRoll }) {
    return (       
        <>
            <div className="group">
                {roll.map((d) => <div className="die">{d}</div>)}
            </div>
            <button onClick={() => setRoll(rollDie(2))}>Roll Die</button>
        </>
    )
}