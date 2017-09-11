import {ADD_TODO, REVERSE_TODO, REMOVE_TODO} from "./actionTypes"

export default (previousState=[], action) => {
	switch(action.type){
		case ADD_TODO:{
			console.log(`${action.type} ${action.text} ${action.id}`)
			return [
				{
					"text": action.text,
					"id": action.id,
					"finished": action.finished
				},
				...previousState
			]
		}
		case REVERSE_TODO:{
			console.log(`${action.type} ${action.id}`)
			return previousState.map((todo, index) => {
				if(todo.id === action.id){
					return {...todo, "finished": !todo.finished}
				}else{
					return todo
				}
			})
		}
		case REMOVE_TODO:{
			console.log(`${action.type} ${action.id}`)
			return previousState.filter(todo => todo.id !== action.id)
		}
		default:{
			return previousState
		}
	}
}