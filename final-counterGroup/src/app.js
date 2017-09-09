import React from "react"
import CounterContainer from "./counter/"
import SummaryContainer from "./summary/"

const App = () => {
	return (
		<div>
			<CounterContainer caption="first" />
			<CounterContainer caption="second" />
			<CounterContainer caption="third" />
			<SummaryContainer />
		</div>
	)
}

export default App