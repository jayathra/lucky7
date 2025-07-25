import Die from "./Die.jsx";
import Button from './Button.jsx';

export default function Dice({ inputs, setInputs }) {
    return (       
        <>
            <Die inputs={inputs} setInputs={setInputs} />
            <Button inputs={inputs} setInputs={setInputs} />
        </>
    )
}