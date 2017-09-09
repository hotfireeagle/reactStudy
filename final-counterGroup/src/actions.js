import * as ActionTypes from "./actionTypes"

export const incrementAction = caption => ({
	"type": "increment/counter",
	"caption": caption
})

export const decrementAction = caption => ({
	"type": "decrement/counter",
	"caption": caption
})