import * as ActionTypes from "./actionTypes"

export default (previousState, action) => {
	switch(action.type){
		case ActionTypes.INCREMENT_ACTION:
			return {...previousState, [action.caption]: previousState[action.caption]+1}
		case ActionTypes.DECREMENT_ACTION: {
			let value = (previousState[action.caption]-1) >= 0 ? (previousState[action.caption]-1) : 0
			return {...previousState, [action.caption]: value}
		}
		default:
			return previousState
	}
}