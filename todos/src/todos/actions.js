import {ADD_TODO, REVERSE_TODO, REMOVE_TODO} from "./actionTypes"

let num = 0

export const addTodo = text => ({
	"type": ADD_TODO,
	"text": text,
	"id": num++,
	"finished": false
})

export const reverseTodo = id => ({
	"type": REVERSE_TODO,
	"id": id
})

export const deleteTodo = id => ({
	"type": REMOVE_TODO,
	"id": id
})