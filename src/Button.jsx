import './Button.css'

export default function Button( { onClick } ) {
    return (
        <button onClick={onClick}>Roll Die</button>
    )
}