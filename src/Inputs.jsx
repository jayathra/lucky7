import './Inputs.css';

export default function Inputs({ target, setTarget }) {
    return(
        <input className="inputs" type="number" placeholder="target" value={target} onChange={(e)=>setTarget(Number(e.target.value))} />
    )
}