import Die from "./Die.jsx";
import Button from './Button.jsx';

export default function Dice({ roll, onButtonClick }) {
    return (       
        <>
            <div className="group">
                {roll.map((dieValue, i) => <Die key={i} dieValue={dieValue} />)}
            </div>
            <Button onClick={onButtonClick} />
        </>
    )
}