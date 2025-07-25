import './Die.css'

export default function Die({ inputs }) {
    return (
        <div className="group">
            {inputs.roll.map((d, i) => <div key={i} className="die">{d}</div>)}
        </div>
    )
}