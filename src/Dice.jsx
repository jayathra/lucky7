import Die from "./Die.jsx";
import "./Dice.css"

export default function Dice({ diceArray }) {
    return (       
        <div className="dice">
            {diceArray.map((dieValue) => <Die dieValue={dieValue} />)}
        </div>
    )
}