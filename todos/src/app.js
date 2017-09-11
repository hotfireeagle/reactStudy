import React from "react"
import {View as TodoView} from "./todos/"
import {View as FilterView} from "./filter"

function App(){
	return (
		<div>
			<TodoView />
			<FilterView />
		</div>
	)
}

export default App