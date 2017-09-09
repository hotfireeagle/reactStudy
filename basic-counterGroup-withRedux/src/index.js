import React from "react"
import ReactDOM from "react-dom"
import Store from "./store"
import Provider from "./provider"
import CounterContainer from "./counter/counterContainer"
import SummaryContainer from "./summary/summaryContainer"

ReactDOM.render(
	<Provider store={Store}>
		<CounterContainer caption="first" />
		<CounterContainer caption="second" />
		<CounterContainer caption="third" />
		<hr />
		<SummaryContainer />
	</Provider>
	,document.getElementById("root")
)