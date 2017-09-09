import React from "react"

const Counter = ({handleIncrement, handleDecrement, value}) => {
	return (
		<div>
			<button onClick={handleIncrement}>+</button>
			<span>{value}</span>
			<button onClick={handleDecrement}>-</button>
		</div>
	)
}

export default Counter