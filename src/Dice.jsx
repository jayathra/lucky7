import Die from "./Die.jsx";
import Button from './Button.jsx';

export default function Dice({ roll, setRoll, dice }) {
    return (       
        <>
            <Die roll={roll} />
            <Button setRoll={setRoll} dice={dice} />
        </>
    )
}