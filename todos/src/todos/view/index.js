import React from "react"
import AddTodoContainer from "./addTodo"
import TodoListContainer from "./todoList"

function View(){
	return (
		<div>
			<AddTodoContainer />
			<TodoListContainer />
		</div>
	)
}

export default View