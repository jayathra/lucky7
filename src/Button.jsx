import './Button.css'

export default function Button( { onClickHandler } ) {
    return (
        <button onClick={onClickHandler}>Roll Dice</button>
    )
}