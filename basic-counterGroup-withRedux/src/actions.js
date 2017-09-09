import * as ActionTypes from "./actionTypes"

export const incrementAction = (caption) => ({
	"type": ActionTypes.INCREMENT_ACTION,
	"caption": caption
})

export const decrementAction = (caption) => ({
	"type": ActionTypes.DECREMENT_ACTION,
	"caption": caption
})