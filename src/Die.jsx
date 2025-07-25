import './Die.css'

export default function Die({ roll }) {
    return (
        <div className="group">
            {roll.map((d) => <div className="die">{d}</div>)}
        </div>
    )
}